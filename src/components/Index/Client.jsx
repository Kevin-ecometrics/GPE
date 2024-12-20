import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    imgSrc: "/1.webp",
    title: "Logística corporativa",
    description:
      "Realizamos los trámites legales por nuestros clientes, ya sea para personas físicas o morales.",
  },
  {
    imgSrc: "/2.webp",
    title: "Asesoría Administrativa",
    description:
      "Brindamos soluciones para la administración del recurso humano dentro del centro de trabajo, la disminución de riesgos fiscales y el ahorro.",
  },
  {
    imgSrc: "/3.webp",
    title: "Asesoría contable",
    description:
      "Proporcionamos asesoramiento en el manejo, control y cuidado de las obligaciones fiscales de cada uno de nuestros clientes.",
  },
  {
    imgSrc: "/4.webp",
    title: "Representación y asesoría legal",
    description:
      "Apoyamos a formalizar negocios mediante asesorías para el cumplimiento de obligaciones fiscales y administrativas.",
  },
];

function Client() {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    // Cambia el estado para mostrar/ocultar la descripción en dispositivos táctiles
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="flex md:flex-row flex-col py-12 md:py-0 justify-between items-center md:w-[80%] mx-auto md:mb-32">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="text-center md:w-64 md:mb-0 mb-8"
          initial="rest"
          whileHover="hover"
          animate={selected === index ? "hover" : "rest"}
          onClick={() => handleClick(index)}
          variants={{
            rest: { height: "13rem" }, // h-52
            hover: { height: "20rem" }, // h-80
          }}
        >
          <motion.div
            variants={{
              rest: { opacity: 1 },
              hover: { opacity: 0.7 },
            }}
            className="relative hover:text-[#F29829]"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              className="mx-auto mb-8"
            />
            <h3 className="text-[24px] mb-4 px-2 mt-2">{item.title}</h3>
          </motion.div>
          <motion.p
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="text-[16px] px-4 mt-1"
          >
            {item.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}

export default Client;
