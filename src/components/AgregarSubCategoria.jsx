import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { Link } from "react-router-dom";

export const AgregarSubcategoria = () => {
  const { addSubCategoryItem, categoryId } = useContext(CategoryContext);
  const [nuevoDocumento, setNuevoDocumento] = useState("");
  const [posicion, setPosicion] = useState(""); // Agrega esta línea
  const [error, setError] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio1, setPrecio1] = useState("");
  const [precio2, setPrecio2] = useState("");
  const handleAgregarDocumento = async () => {
    try {
      // Validar que el nombre de la categoría no esté vacío
      if (nuevoDocumento.trim() === "") {
        setError("Por favor, ingresa un nombre de categoría válido.");
        return;
      }

      const subCategory = {
        nombre: nuevoDocumento,
        posicion: posicion || 0, // Si no se proporciona la posición, se establece a 0
        descripcion: descripcion,
        Precio1: precio1,
        Precio2: precio2,
      };
      console.log(categoryId);
      // Llamar a la función para agregar la categoría desde el contexto
      await addSubCategoryItem(subCategory, categoryId);

      // Limpiar los campos después de agregar la categoría
      setNuevoDocumento("");
      setPosicion("");
      setError("");
      setDescripcion("");
      setPrecio1("");
      setPrecio2(""); // Limpiar el mensaje de error
    } catch (error) {
      console.error("Error al agregar documento:", error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <div>
      <section>
        <Link to="/admin">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <span>Subcategorias</span>
      </section>
      <div>
        <h3>Nombre de Categoría</h3>
        <input
          type="text"
          placeholder="Nueva categoría"
          autoComplete="off"
          value={nuevoDocumento}
          onChange={(e) => setNuevoDocumento(e.target.value)}
        />

        <h3>Posición</h3>
        <input
          type="text"
          autoComplete="off"
          value={posicion}
          onChange={(e) => setPosicion(e.target.value)}
        />
        <h3>Descripcion</h3>
        <input
          type="text"
          placeholder="Descripcion"
          autoComplete="off"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <h3>Precio 1</h3>
        <input
          type="text"
          placeholder="Precio 1"
          autoComplete="off"
          value={precio1}
          onChange={(e) => setPrecio1(e.target.value)}
        />
        <h3>Precio 2</h3>
        <input
          type="text"
          placeholder="Precio 2"
          autoComplete="off"
          value={precio2}
          onChange={(e) => setPrecio2(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleAgregarDocumento}>Guardar</button>
      </div>
    </div>
  );
};
