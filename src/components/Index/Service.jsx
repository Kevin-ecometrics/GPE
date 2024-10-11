/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

function Service() {
  const titleServices = [
    "Protegemos tus finanzas y defendemos tus derechos.",
    "Tu respaldo financiero y legal en un solo lugar.",
  ];

  const services = [
    {
      title: "Logística corporativa",
      link: "/",
      description:
        "Pieza clave para las finanzas de tu empresa estamos al frente de las actividades y procesos de almacenamiento, trasporte y distribución",
    },
    {
      title: "Administración de Nómina",
      link: "/",
      description:
        "Elemento indispensable donde la supervisión el control estricto del calculo y pagos en tiempo y forma son actividades diarias",
    },
    {
      title: "Asesoría contable",
      link: "/",
      description:
        "Pieza imprescindible para el patrimonio de tu empresa, brindándote acompañamiento y orientación integral ",
    },
    {
      title: "Asesoría individual",
      link: "/",
      description:
        "Proyecta tu crecimiento con un asesoramiento uno a uno para tomar las mejores decisiones para tu patrimonio personal",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titleServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titleServices.length]);

  const renderTitle = (title, index) => {
    if (index === 0) {
      return (
        <>
          Protegemos tus <span className="text-[#CD512F]">finanzas</span> y
          defendemos tus <span className="text-[#CD512F]">derechos</span>.
        </>
      );
    } else if (index === 1) {
      return (
        <>
          Tu respaldo <span className="text-[#CD512F]">financiero</span> y legal
          en un solo <span className="text-[#CD512F]">lugar</span> .
        </>
      );
    }
    return title;
  };

  const renderServices = services.map((service, index) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <motion.div
        ref={ref}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 50 }}
        key={index}
        className="flex md:flex-row flex-col justify-between items-start border-b border-gray-800 group md:px-0 px-8"
      >
        <div className="mb-12">
          <h3 className="text-[32px] uppercase mb-8 mt-2 text-[#D2D2D0] group-hover:text-[#CD512F]">
            {service.title}
          </h3>
          <div className="flex gap-8">
            <div className="border w-0 bg-[#CD512F] border-[#CD512F]"></div>
            <p className="text-[16px] mt-1 text-[#D2D2D099]">
              {service.description}
            </p>
          </div>
        </div>
        <div className="bg-[#181817] group-hover:bg-[#CD512F] ease-in-out transform transition-transform duration-300 flex flex-col py-4 px-8 ">
          <div className="flex justify-end items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 group-hover:rotate-45"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </div>
          <p className="text-white text-center uppercase">Leer más</p>
        </div>
      </motion.div>
    );
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="md:h-screen"
    >
      <p className="text-[23px] text-[#D2D2D099] mb-12 text-center md:text-start">
        Nuestros servicios
      </p>
      <div className="flex justify-start items-center mb-12">
        <AnimatePresence mode="popLayout">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-[#D2D2D0] md:text-start text-center text-[56px] uppercase"
          >
            {renderTitle(titleServices[currentIndex], currentIndex)}
          </motion.h1>
        </AnimatePresence>
      </div>
      {renderServices}
    </motion.section>
  );
}

export default Service;
