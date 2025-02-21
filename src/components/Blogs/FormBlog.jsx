import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast"; // Importar React Hot Toast

// eslint-disable-next-line react/prop-types
function FormBlog({ URL }) {
  // Estado para manejar el formulario de manera optimizada

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    message: "",
  });

  const [error, setError] = useState(""); // Estado para manejar errores
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para manejar el estado del botón

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validar y enviar la reseña
  const ReviewSubmit = async (e) => {
    e.preventDefault();

    const { name, position, message } = formData;

    // Validación de campos vacíos
    if (!name.trim() || !position.trim() || !message.trim()) {
      setError("Todos los campos son obligatorios.");
      toast.error("Por favor completa todos los campos.");
      return;
    }

    try {
      // Establecer el estado de isSubmitting a true antes de la solicitud
      setIsSubmitting(true);

      // Petición a la API para enviar la reseña
      await axios.post("https://gpeconsultores.com.mx/reviews", {
        name,
        position,
        message,
        blogID: URL,
        accepted: false,
      });

      // Si la respuesta es exitosa
      toast.success("Reseña enviada exitosamente.");

      // Limpiar los campos del formulario
      setFormData({ name: "", position: "", message: "" });
      setError(""); // Limpiar el mensaje de error
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
      setError("Hubo un error al enviar la reseña. Inténtalo nuevamente.");
      toast.error("Error al enviar la reseña. Inténtalo nuevamente.");
    } finally {
      // Después de la solicitud (independientemente del resultado), restaurar el estado del botón
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <p className="text-4xl mb-8">
        Comparte tu opinión sobre esta publicación
      </p>
      <form onSubmit={ReviewSubmit}>
        <div className="mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col gap-6">
            {/* Nombre */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-white mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>

            {/* Puesto */}
            <div className="flex flex-col">
              <label htmlFor="position" className="text-lg text-white mb-2">
                Puesto
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="p-4 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
                placeholder="Tu puesto en la empresa"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-white mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-4 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>

            {/* Mostrar error si hay */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Botón de Enviar */}
            <button
              type="submit"
              disabled={isSubmitting} // Deshabilitar el botón si estamos enviando la solicitud
              className={`w-full p-4 ${
                isSubmitting ? "bg-gray-500" : "bg-[#F29829]"
              } text-white uppercase rounded-md mt-4 hover:bg-[#e4872c] transition-colors`}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}{" "}
              {/* Mostrar texto diferente si estamos enviando */}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default FormBlog;
