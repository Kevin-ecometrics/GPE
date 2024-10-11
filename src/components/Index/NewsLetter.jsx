import { motion } from "framer-motion";

function NewsLetter() {
  // Función que renderiza el texto con animación
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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-16">
        <div>
          <video
            src="https://miller.bslthemes.com/pixy-demo/img/home-4/3.mp4"
            className="w-screen md:h-[800px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="flex justify-center items-start px-4 md:px-16 flex-col">
          <p className="text-xl uppercase md:mb-16 py-8 md:py-0">Newsletter</p>
          <h1 className="text-4xl md:text-6xl uppercase mb-4">
            {renderText("Suscríbete a nuestra ")}
            <span className="text-[#CD512F]">gaceta</span>
          </h1>
          <h2 className="text-4xl md:text-6xl uppercase mb-16">
            {renderText("Recibe ")}
            <span className="text-[#CD512F]">información</span>{" "}
            {renderText("valiosa a tu ")}
            <span className="text-[#CD512F]">bandeja</span>
          </h2>
          <div className="relative">
            <input
              type="email"
              className="w-80 bg-black border border-white rounded-full p-6 text-white"
              placeholder="Enter Your Email"
            />
            <button
              className="bg-[#CD512F] hover:bg-white hover:text-orange-600 transition-transform 
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <div className="bg-[#CD512F] ml-[28%] h-32 hidden md:block"></div>
        <div>
          <p className="text-start py-4 md:p-8 md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            fugiat nostrum sed ad odio error. Dolorem iusto fugit quas harum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
