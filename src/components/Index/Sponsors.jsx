import { motion } from "framer-motion";
import Observer from "@components/Animation/Observer";

function Sponsors() {
  const text =
    "Nos distinguimos por la excelencia en soluciones adaptables y a la medida en consultoría, asesoramiento fiscal y laboral, donde el profesionalismo de nuestro equipo se destaca, puesto que ofrecemos toda nuestra disponibilidad y habilidades para adaptarnos a las variaciones del mercado.";

  const words = text.split(" ").map((word, index) => {
    if (
      ["excelencia", "consultoría", "profesionalismo", "mercado"].includes(
        word.replace(/[.,]/g, "")
      )
    ) {
      return (
        <span key={index} className="text-[#CD512F]">
          {word}{" "}
        </span>
      );
    } else {
      return word
        .split("")
        .map((char, charIndex) => (
          <motion.span
            key={`${index}-${charIndex}`}
            whileHover={{ scale: 1.2 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))
        .concat(" ");
    }
  });

  return (
    <div>
      <Observer>
        <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center px-8 md:px-0 md:w-[80%] mx-auto mb-16">
          <img src="/1.webp" alt="" />
          <img src="/2.webp" alt="" />
          <img src="/3.webp" alt="" />
          <img src="/4.webp" alt="" />
        </div>
      </Observer>
      <div>
        <Observer>
          <p className="text-center mb-8 uppercase text-xl">
            Explora nuestro negocio
          </p>
        </Observer>

        <Observer>
          <h2 className="text-3xl md:text-5xl text-start md:text-center uppercase space-y-4 px-8 md:px-1">
            {words}
          </h2>
        </Observer>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-start items-start  gap-4 py-8 px-8 md:px-0">
        <Observer>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </Observer>
        <Observer>
          <p
            className="border border-white px-12 py-4 rounded-3xl 
         uppercase bg-transparent hover:bg-white transition-all duration-300 cursor-pointer hover:text-[#CD512F] hover:border-[#CD512F]
        "
          >
            Lorem, ipsum.{" "}
          </p>
        </Observer>
      </div>
    </div>
  );
}

export default Sponsors;
