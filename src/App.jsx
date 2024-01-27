import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { CategoryProvider } from "./context/CategoryContext";
import { AgregarSubcategoria } from "./components/AgregarSubCategoria";

export const App = () => {
  return (
    <CategoryProvider>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/addCategory" element={<AgregarCategoria />} />
        <Route path="/addSubCategory" element={<AgregarSubcategoria />} />
      </Routes>
    </CategoryProvider>
  );
};

/*
       <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/admin">Administrar</Link>
          </li>
        </ul>
      </nav> */
