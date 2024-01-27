// DeleteCategoryButton.jsx
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export const DeleteCategoryButton = ({ itemId }) => {
  const { removeCategoryItem } = useContext(CategoryContext);

  const handleDelete = () => {
    // Lógica para eliminar el ítem, por ejemplo, usando Firebase
    removeCategoryItem(itemId);
  };

  return (
    <span
      className="cursorhover material-symbols-outlined"
      onClick={handleDelete}
    >
      close
    </span>
  );
};
