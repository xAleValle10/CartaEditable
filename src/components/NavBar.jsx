import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Verifica si la ruta actual es la que deseas
    if (location.pathname === "/") {
      // Agrega la clase CSS con la imagen de fondo al body
      document.body.classList.add("background");
    } else {
      // Remueve la clase CSS si la ruta no coincide
      document.body.classList.remove("background");
    }

    // Limpia los estilos cuando el componente se desmonta o la ruta cambia
    return () => {
      document.body.classList.remove("background");
    };
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`NavUl ${isMenuOpen ? "open" : ""}`}>
        <div className="LogoContainer">
          <img
            className="Logo"
            src="https://hda.caramagnola.cl/assets/img/logo-caramagnola-web.svg"
            alt="LogoCaraamgnola"
          />
        </div>
        <div className="dropdown" onClick={handleMenuToggle}>
          <span className="menu-icon material-symbols-outlined">menu</span>
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-buttons">PROMOCIONES</li>
              <li className="dropdown-buttons">CERVEZAS EN SCHOPS</li>
              <li className="dropdown-buttons">CERVEZAS EN BOTELLAS</li>
              <li className="dropdown-buttons">BEBIDAS/SOFT DRINKS</li>
              <li className="dropdown-buttons">LOCIRES (1 CORTO + BEBIDA)</li>
              <li className="dropdown-buttons">COCKTAILS</li>
              <li className="dropdown-buttons">VINOS</li>
              <li className="dropdown-buttons">PARA PICAR/SNACKS</li>
              <li className="dropdown-buttons">PIZZAS</li>
              <li className="dropdown-buttons">ENSALDAS/SALADS</li>
              <li className="dropdown-buttons">POSTRES/DESSERTS</li>
            </ul>
          )}
        </div>
      </div>
      <div className="BigLogo">
        <img
          src="https://hda.caramagnola.cl/assets/logo-caramagnola.png"
          alt="LogoCaraamgnola"
        />
      </div>
    </div>
  );
};
