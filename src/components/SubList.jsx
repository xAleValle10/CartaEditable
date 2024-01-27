// MenuList.jsx
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { DeleteCategoryButton } from "./DeleteCategoryButton";
import { LinkAgregarSubCategoria } from "./LinkAgregarSubCategoria";

export const SubList = () => {
  const { categorySubItems } = useContext(CategoryContext);
  console.log("categorySubItems:", categorySubItems);
  categorySubItems.sort((a, b) => a.posicion - b.posicion);
  return (
    <div>
      {categorySubItems.map((item) => (
        <div key={item.id}>
          <h3>{item.nombre}</h3>
          <span className=" cursorhover material-symbols-outlined">add</span>
          <DeleteCategoryButton itemId={item.id} />
          <span className="material-symbols-outlined">publish</span>
          <span className="material-symbols-outlined">edit</span>
          <LinkAgregarSubCategoria />
          <SubList />
        </div>
      ))}
    </div>
  );
};
