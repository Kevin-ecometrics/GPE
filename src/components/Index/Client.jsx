import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    imgSrc: "/La mejor opcion en logistica corporativa en Tijuana.webp",
    alt: "GPE es la mejor opción en logística corporativa en Tijuana para tu negocio o empresa  ",
    title: "Logística corporativa",
    description:
      "Realizamos los trámites legales por nuestros clientes, ya sea para personas físicas o morales.",
  },
  {
    imgSrc: "/Asesoria de primer nivel en Tijuana.webp",
    alt: "Gpe brinda orientación y asesoría de primer nivel para que todo marche conforme a la ley en  Tijuana  ",
    title: "Asesoría Administrativa",
    description:
      "Brindamos soluciones para la administración del recurso humano dentro del centro de trabajo, la disminución de riesgos fiscales y el ahorro.",
  },
  {
    imgSrc: "/GPE ofrece Precision en asesoria contable.webp",
    alt: "GPE ofrece precisión en asesoría contable para regularizar tu negocio dentro del marco legal  ",
    title: "Asesoría contable",
    description:
      "Proporcionamos asesoramiento en el manejo, control y cuidado de las obligaciones fiscales de cada uno de nuestros clientes.",
  },
  {
    imgSrc:
      "/GPE tiene un alto compromiso en representacion y asesoria legal.webp",
    alt: "GPE tiene un alto compromiso en representación y asesoría legal ante autoridades de trabajo, lineamientos, contingencias y mas  ",
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
              alt={item.alt}
              title={item.alt}
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
