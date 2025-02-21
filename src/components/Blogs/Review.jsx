import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Reviews({ URL }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://gpeconsultores.com.mx/reviews"
        );
        // Filtrar las reseñas por 'accepted' y por 'blogID' (que es el URL recibido)
        const filteredReviews = response.data.filter(
          (review) => review.accepted === 1 && review.blogID === URL
        );
        setReviews(filteredReviews); // Guardar las reseñas filtradas en el estado
      } catch (error) {
        console.error("Error al obtener reseñas:", error);
      }
    };

    if (URL) {
      fetchReviews(); // Solo hacer la solicitud si se tiene el URL
    }
  }, [URL]); // Se vuelve a ejecutar cuando cambia el URL

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
      <p className="text-lg uppercase mb-12">Comentarios</p>
      <h2 className="text-4xl md:text-6xl mb-16 text-center uppercase">
        Lo que nuestros <span className="text-[#F29829]">lectores</span> dicen,
        la <span className="text-[#F29829]">voz</span> de quienes leen y
        comparten <span className="text-[#F29829]">su experiencia</span>
      </h2>
      {reviews.length === 0 ? (
        <p className="text-white text-center text-2xl">
          Aún no hay reseñas para este blog.
        </p>
      ) : (
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
          <div className="mb-8 md:mb-0 w-80 md:w-96 h-[600px] md:h-[500px] flex justify-center items-center overflow-hidden relative">
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
                <div>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="mb-8 w-16 h-16"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    <p className="text-2xl text-white mb-2">
                      {reviews[currentIndex].name}
                    </p>
                    <p className="text-lg text-white mb-2">
                      {reviews[currentIndex].position}
                    </p>
                    <p className="text-xl text-white mb-2">
                      {reviews[currentIndex].message}
                    </p>
                  </div>
                </div>
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
      )}
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
