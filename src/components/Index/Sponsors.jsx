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
        <span key={index} className="text-[#F29829]">
          {word}&nbsp;
        </span>
      );
    } else {
      return (
        <span key={index} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${index}-${charIndex}`}
              whileHover={{ scale: 1.2 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      );
    }
  });

  return (
    <div className="mb-8 py-16">
      <Observer>
        <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center px-8 md:px-0 md:w-[80%] mx-auto mb-16">
          <img src="/1.webp" alt="partner" title="partner" />
          <img src="/2.webp" alt="partner" title="partner" />
          <img src="/3.webp" alt="partner" title="partner" />
          <img src="/4.webp" alt="partner" title="partner" />
        </div>
      </Observer>
      <div>
        <Observer>
          <p className="text-center mb-8 uppercase text-xl">
            Explora nuestro negocio
          </p>
        </Observer>

        <Observer>
          <h2 className="text-2xl md:text-5xl text-center uppercase space-y-4 md:px-1">
            {words}
          </h2>
        </Observer>
      </div>
    </div>
  );
}

export default Sponsors;
