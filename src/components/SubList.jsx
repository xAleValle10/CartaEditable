// MenuList.jsx
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { DeleteCategoryButton } from "./DeleteCategoryButton";
import { LinkAgregarSubCategoria } from "./LinkAgregarSubCategoria";

export const SubList = () => {
  const { categoryItems } = useContext(CategoryContext);

  categoryItems.sort((a, b) => a.posicion - b.posicion);
  return (
    <div>
      {categoryItems.map((item) => (
        <div key={item.id}>
          <h3>{item.nombre}</h3>
          <span className=" cursorhover material-symbols-outlined">add</span>
          <DeleteCategoryButton itemId={item.id} />
          <span className="material-symbols-outlined">publish</span>
          <span className="material-symbols-outlined">edit</span>
          <LinkAgregarSubCategoria />
        </div>
      ))}
    </div>
  );
};
