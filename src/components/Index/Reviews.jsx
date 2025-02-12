import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Reviews() {
  const reviews = [
    {
      avatar: "/1. Restaurant Mi puerto Sabor a Mar.webp",
      name: "Alfonso Jimenez",
      position: "Propietario de Mariscos Mi Puerto",
      text: "Queremos expresar nuestro más sincero agradecimiento a GPE a su equipo de abogados, contadores y consultores por su compromiso, por brindarnos siempre una atención pronta y eficaz . Su colaboración ha sido clave para el éxito de nuestro negocio, Estamos muy orgullosos de contar con un equipo confiable como GPE Consultores",
    },
    {
      avatar: "/2. Wingman.webp",
      name: "Manuel Robles",
      position: "Propietario de Wingman",
      text: "El servicio que me han brindado la Licenciada Berenice y el Licenciado Issac, durante este tiempo ha sido de excelente agrado, siempre están pendiente de lo que necesito, son muy accesibles y amables. Solo me queda expresar mi agradecimiento con su profesionalismo",
    },
    {
      avatar: "/3. Aranea.webp",
      name: "Jorge Tapia",
      position: "Gerente de Aranea Telecom",
      text: "El equipo de GPE Consultores se ha convertido en un aliado estratégico en la toma de decisiones, brindando recomendaciones administrativas y legales acordea las necesidades de nuestra empresa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div
      className="flex overflow-x-hidden justify-center items-center py-16 flex-col"
      id="reviews"
    >
      <p className="text-lg uppercase mb-12">Reseñas</p>
      <h2 className="text-4xl md:text-6xl mb-16 text-center uppercase">
        Lo que nuestro <span className="text-[#F29829]">trabajo</span> dice, la{" "}
        {""}
        <span className="text-[#F29829]">voz</span> de nuestros{" "}
        <span className="text-[#F29829]">clientes</span>
      </h2>
      <div className="flex md:justify-between items-center md:w-[70%] mx-auto px-8">
        <div
          className="bg-[#F29829] p-2 rounded-full cursor-pointer hidden md:block"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </div>
        <div className=" mb-8 md:mb-0 w-80 md:w-96 h-[600px] md:h-[500px] flex justify-center items-center overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset, velocity }) => {
                setIsDragging(false);
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  setDirection(1);
                  handleNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  setDirection(-1);
                  handlePrev();
                }
              }}
              className={`absolute w-full h-full flex flex-col justify-center items-center text-center ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              <img
                src={reviews[currentIndex].avatar}
                alt={reviews[currentIndex].name}
                className="w-24 h-24 rounded-full mb-4"
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="mb-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg> */}
              <h3 className="text-2xl mb-4">{reviews[currentIndex].name}</h3>
              <p className="text-lg mb-4">{reviews[currentIndex].position}</p>
              {/* <p className="mt-2">{reviews[currentIndex].text}</p> */}
              <p className="text-xl text-white">{reviews[currentIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="bg-[#F29829] p-2 rounded-full cursor-pointer hidden md:block"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
        </div>
      </div>
      <div className="flex">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
              index === currentIndex ? "bg-[#F29829]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
