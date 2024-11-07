import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { subscribeToNewsletter } from "@routes/api";

function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await subscribeToNewsletter(email);
      toast.success(res.data.message);
      setEmail("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        console.error("Error en el servidor");
      }
    }
  };

  const renderText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        whileHover={{ scale: 1.3 }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char} {/* Renderiza espacios */}
      </motion.span>
    ));
  };

  const renderWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="inline-block">
        {renderText(word + " ")}
      </span>
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-16">
        <div>
          <video
            src="/video.mp4"
            className="w-screen md:h-[900px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="flex justify-center items-start px-4 md:px-16 flex-col bg-[#181817]">
          <p className="text-lg uppercase md:mb-16 py-8 md:py-0">Newsletter</p>
          {/* <h1 className="text-4xl md:text-6xl uppercase mb-4">
            {renderText("Suscríbete a nuestra ")}
            <span className="text-[#F29829]">gaceta</span>
          </h1> */}
          <h2 className="text-4xl md:text-6xl uppercase mb-16 md:w-[80%]">
            {renderWords("Recibe")}
            <span className="text-[#F29829] inline-block">
              información&nbsp;
            </span>
            {renderWords("valiosa a tu")}
            <span className="text-[#F29829] inline-block">bandeja</span>
          </h2>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="md:w-[500px] bg-black border border-black rounded-full p-6 text-white mb-8 md:mb-0"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="bg-[#F29829] hover:bg-white hover:text-orange-600 transition-transform 
            duration-300 ease-in-out
          text-white rounded-full p-4 absolute right-2  top-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
            <Toaster position="top-right" />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <div className="bg-[#F29829] ml-[28%] h-32 hidden md:block"></div>
        <div>
          <p className="text-start py-4 md:p-8 md:w-[80%]">
            Al suscribirte a nuestra lista de correo, siempre estarás
            actualizado con las últimas noticias de nosotros.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
