import Observer from "@components/Animation/Observer";
import { motion } from "framer-motion";

function Hero() {
  const text = "EXPLORA NUEVAS ";
  const images = [
    { src: "/1contact.webp", title: "LLamanos", description: "+52663xxxxxx" },
    {
      src: "/2contact.webp",
      title: "Escribenos",
      description: "gpeconsultores@gmail.com",
    },
    {
      src: "/3contact.webp",
      title: "Visitanos",
      description:
        "Boulevard Diaz Ordaz 12649-3D primer piso, El Paraiso, 22106 Tijuana, B.C.",
    },
  ];

  return (
    <div className="md:h-screen uppercase flex justify-center items-center flex-col py-64 md:py-0">
      <div className="flex">
        <a href="/">
          <p className="hover:text-white">Inicio </p>
        </a>
        &nbsp;
        <p>/</p>
        &nbsp;
        <p className="text-[#CD512F]">Contacto</p>
      </div>
      <Observer>
        <h1 className="text-7xl py-8 text-center mb-16">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.3 }}
              className="inline-block mx-1"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <span className="text-[#CD512F] ml-2">OPORTUNIDADES</span>
        </h1>
      </Observer>
      <Observer>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 mx-auto uppercase">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="text-center md:w-64 md:mb-0 mb-8 md:h-52"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0.7 },
                }}
                className="relative hover:text-[#CD512F]"
              >
                <img src={item.src} alt={item.title} className="mx-auto mb-8" />
                <h3 className="text-[24px]  mb-4 mt-2 ">{item.title}</h3>
              </motion.div>
              <motion.p
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="text-[16px] px-4  mt-1"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </Observer>
    </div>
  );
}

export default Hero;
