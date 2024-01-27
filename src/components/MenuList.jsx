// MenuList.jsx
import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { DeleteCategoryButton } from "./DeleteCategoryButton";
import { LinkAgregarSubCategoria } from "./LinkAgregarSubCategoria";
import { SubList } from "./SubList";

export const MenuList = () => {
  const { categoryItems } = useContext(CategoryContext);
  const [showSubList, setShowSubList] = useState(false);
  //console.log(categoryItems);
  const handleAddClick = () => {
    setShowSubList(!showSubList);
  };
  return (
    <div>
      {categoryItems.map((item) => (
        <div key={item.id}>
          {/* Aquí renderiza directamente el contenido de cada categoría */}
          <h3>{item.nombre}</h3>
          <span
            className=" cursorhover material-symbols-outlined"
            onClick={handleAddClick}
          >
            add
          </span>
          <DeleteCategoryButton itemId={item.id} />
          <span className="material-symbols-outlined">publish</span>
          <span className="material-symbols-outlined">edit</span>
          <LinkAgregarSubCategoria />
          {showSubList && <SubList />}
        </div>
      ))}
    </div>
  );
};
