import Observer from "@components/Animation/Observer";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del representante"
                className="border-b focus:outline-none border-gray-500 hover:border-[#F29829]  bg-transparent w-1/2 p-2 my-4"
              />
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="¿Cuál es tu correo electrónico?"
                className="border-b focus:outline-none border-gray-500 hover:border-[#F29829] bg-transparent w-1/2 p-2 my-4"
              />{" "}
            </div>

            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="10"
              rows="5"
              placeholder="Escribe tu mensaje"
              className="border-b focus:outline-none border-gray-500 hover:border-[#F29829] w-full p-2 my-4 bg-transparent"
            ></textarea>
            <button
              className="bg-[#F29829] p-2 px-8 py-4 hover:opacity-85 my-4  text-white rounded-full"
              type="submit"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </Observer>
    </div>
  );
}

export default Form;
