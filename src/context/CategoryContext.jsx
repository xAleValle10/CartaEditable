// CategoryContext.js
import { createContext, useState, useEffect } from "react";
import { firestore } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryRef = collection(firestore, "category");
    getAllCategories(setCategories);
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

  /* const addCategoryItem = async (item) => {
    try {
      const categoryColeccion = collection(firestore, "category");
      const categoryRef = await addDoc(categoryColeccion, item);
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
  }; */

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

  const getCategories = async () => {
    try {
      return collection(firestore, "category");
    } catch (error) {
      console.error("Error al agregar categoría:", error);
      throw error;
    }
  };

  const getAllCategories = async (setCategories) => {
    try {
      const categorias = [];
      const categories = await getDocs(await getCategories());
      categories.docs.map((item) => {
        //console.log(item.data());
        categorias.push(item.data());
      });
      setCategories(categorias);
      console.log(categorias);
    } catch (error) {
      console.error("Error al agregar categoría:", error);
      throw error;
    }
  };

  const addSubCategoryItem = async (item, categoryId) => {
    try {
      const categoryRef = await addDoc(
        collection(firestore, "category", categoryId),
        {
          ...item,
          ParentID: categoryId,
        }
      );

      // Devuelve el ID del documento principal
      return {
        categoryId: categoryRef.id,
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
        categoryId,
        addCategoryItem,
        addSubCategoryItem,
        removeCategoryItem,
        categories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
