import { Link } from "react-router-dom";
import { MenuList } from "../components/MenuList";

export const Admin = () => {
  return (
    <div>
      <h1>Panel de administración</h1>

      <Link to="/addCategory">
        <div>
          <span className="material-symbols-outlined">create_new_folder</span>
          <h3>Agregar Categoria </h3>
        </div>
      </Link>

      <MenuList />
    </div>
  );
};
