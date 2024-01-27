// CategoryContext.js
import { createContext, useState, useEffect } from "react";
import { firestore } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categorySubItems, setCategorySubItems] = useState([]);
  const [subcollectionName, setSubcollectionName] = useState("");

  useEffect(() => {
    const categoryRef = collection(firestore, "category");

    const unsubscribe = onSnapshot(categoryRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategoryItems(items);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addCategoryItem = async (item) => {
    try {
      const categoryRef = await addDoc(collection(firestore, "category"), item);
      setCategoryId(categoryRef.id);

      // Agrega los console.log para verificar los valores antes de devolverlos
      console.log("categoryId:", categoryRef.id);

      // Devuelve el ID del documento principal
      return {
        categoryId: categoryRef.id,
      };
    } catch (error) {
      console.error("Error al agregar categoría:", error);
      throw error;
    }
  };

  const addSubCategoryItem = async (item, categoryId) => {
    try {
      const subcollectionName = "subcategoria_" + item.nombre;
      const categoryRef = await addDoc(
        collection(firestore, "category", categoryId, subcollectionName),
        {
          ...item,
          categoryId,
        }
      );
      setSubcollectionName(subcollectionName);
      // Devuelve el ID del documento principal
      return {
        categoryId: categoryRef.id,
        subcollectionName,
      };
    } catch (error) {
      console.error("Error al agregar categoría:", error);
      throw error;
    }
  };

  const removeCategoryItem = async (itemId) => {
    const categoryRef = collection(firestore, "category");
    await deleteDoc(doc(categoryRef, itemId));
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryItems,
        categorySubItems,
        categoryId,
        addCategoryItem,
        addSubCategoryItem,
        removeCategoryItem,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
