import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";

export const AgregarCategoria = () => {
  const { addCategoryItem } = useContext(CategoryContext);
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [posicion, setPosicion] = useState("");

  const handleGuardar = async () => {
    // Validar que el nombre de la categoría no esté vacío
    if (nombreCategoria.trim() === "") {
      alert("Por favor, ingresa un nombre de categoría válido.");
      return;
    }

    // Crear un objeto con la información de la nueva categoría
    const nuevaCategoria = {
      nombre: nombreCategoria,
      posicion: posicion || 0, // Si no se proporciona la posición, se establece a 0
    };

    // Llamar a la función para agregar la categoría desde el contexto
    await addCategoryItem(nuevaCategoria);

    // Limpiar los campos después de agregar la categoría
    setNombreCategoria("");
    setPosicion("");
  };

  return (
    <div>
      <section>
        <Link to="/admin">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <span>Categorias de menú principal</span>
      </section>
      <div>
        <h3>Nombre de Categoría</h3>

        <input
          type="text"
          placeholder="Nueva categoría"
          autoComplete="off"
          value={nombreCategoria}
          onChange={(e) => setNombreCategoria(e.target.value)}
        />

        <h3>Posición</h3>

        <input
          type="text"
          autoComplete="off"
          value={posicion}
          onChange={(e) => setPosicion(e.target.value)}
        />

        <button onClick={handleGuardar}>Guardar</button>
      </div>
    </div>
  );
};
