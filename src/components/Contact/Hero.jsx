import Observer from "@components/Animation/Observer";
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const text = "EXPLORA NUEVAS ";
  const images = [
    {
      src: "/llama a gpe Consultores al 664 608 5340.webp",
      title: "LLámanos",
      description: "+526646085340",
      alt: "GPE consultores esta a una llamada para apoyarte en materia laboral y contable al 664 608 5340",
    },
    {
      src: "/en gpe consultores estamos comprometidos con tu negocio escribenos.webp",
      title: "Escríbenos",
      description: "administracion@gpeconsultores.com.mx",
      alt: "En GPE consultores puedes llenar un formulario para conocer tu situación y apoyarte en la brevedad, escribenos",
    },
    {
      src: "/Nos encontramos en Plaza patria listos para atenderte.webp",
      title: "Visítanos",
      description:
        "Blvd. Gustavo Diaz Ordaz No. 12649 Local 17G-B, El Paraiso, Tijuana, Baja California.",
      alt: " Nos encontramos cerca de ti en plaza patria de lunes a viernes listos para apoyarte",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" uppercase flex justify-center items-center flex-col py-32 md:py-32">
      <div className="flex">
        <a href="/home">
          <p className="hover:text-white">Inicio </p>
        </a>
        &nbsp;
        <p>/</p>
        &nbsp;
        <p className="text-[#F29829]">Contacto</p>
      </div>
      <Observer>
        <div className="flex justify-center items-center md:items-start flex-col ">
          <h1 className="text-4xl md:text-7xl py-8 text-center mb-16">
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mx-1">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    whileHover={{ scale: 1.3 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < text.split(" ").length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
            <span className="text-[#F29829] ml-2">OPORTUNIDADES</span>
          </h1>
        </div>
      </Observer>
      <Observer>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 mx-auto uppercase">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="text-center md:w-64 md:mb-0 mb-8 md:h-52"
              initial="rest"
              whileHover="hover"
              animate={activeIndex === index ? "hover" : "rest"}
              onTouchStart={() => handleTouch(index)}
            >
              <motion.div
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0.7 },
                }}
                className="relative hover:text-[#F29829]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  title={item.alt}
                  className="mx-auto mb-8"
                />
                <h3 className="text-[24px] mb-4 mt-2">{item.title}</h3>
              </motion.div>
              <motion.p
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
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
