import Observer from "@components/Animation/Observer";
import { useState } from "react";
import { sendContactEmail } from "@routes/api";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name,
      email,
      message,
    };

    try {
      await sendContactEmail(data);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Mensaje enviado correctamente");
    } catch {
      console.error("Error en el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="uppercase">
      <Observer>
        <h1 className="text-center text-5xl md:text-6xl mb-8">Contáctanos</h1>
      </Observer>
      <Observer>
        <form onSubmit={handleSubmit} className="px-8 md:px-0">
          <div className="flex justify-center items-end flex-col">
            <div className="flex gap-8 w-full">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del representante"
                className="border-b focus:outline-none border-gray-500 hover:border-[#F29829]  bg-transparent w-1/2 p-2 my-4"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="¿Cuál es tu correo electrónico?"
                className="border-b focus:outline-none border-gray-500 hover:border-[#F29829] bg-transparent w-1/2 p-2 my-4"
                required
              />{" "}
            </div>

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="10"
              rows="5"
              placeholder="Escribe tu mensaje"
              className="border-b focus:outline-none border-gray-500 hover:border-[#F29829] w-full p-2 my-4 bg-transparent"
              required
            ></textarea>
            <button
              className="bg-[#F29829] p-2 px-8 py-4 hover:opacity-85 my-4  text-white rounded-full"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Enviar"
              )}{" "}
            </button>
          </div>
        </form>
      </Observer>
      <Toaster position="top-right" />
    </div>
  );
}

export default Form;
