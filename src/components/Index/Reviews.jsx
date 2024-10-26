import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Reviews() {
  const reviews = [
    {
      avatar: "/path/to/avatar1.jpg",
      name: "John Doe",
      position: "CEO",
      text: "Review 1",
    },
    {
      avatar: "/path/to/avatar2.jpg",
      name: "Jane Smith",
      position: "CTO",
      text: "Review 2",
    },
    {
      avatar: "/path/to/avatar3.jpg",
      name: "Alice Johnson",
      position: "CFO",
      text: "Review 3",
    },
    {
      avatar: "/path/to/avatar4.jpg",
      name: "Bob Brown",
      position: "COO",
      text: "Review 4",
    },
    {
      avatar: "/path/to/avatar5.jpg",
      name: "Charlie Davis",
      position: "CMO",
      text: "Review 5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
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
      className="flex overflow-x-hidden justify-center items-center py-16 flex-col px-8 md:px-0 scroll-mt-16"
      id="reviews"
    >
      <p className="text-2xl uppercase mb-12">Reseñas</p>
      <h2 className="text-4xl md:text-6xl mb-16 uppercase">
        Lo que nuestro <span className="text-[#CD512F]">trabajo</span> dice, la{" "}
        {""}
        <span className="text-[#CD512F]">voz</span> de nuestros{" "}
        <span className="text-[#CD512F]">clientes</span>
      </h2>
      <div className="flex md:justify-between items-center md:w-[70%] mx-auto px-8">
        <div
          className="bg-orange-500 p-2 rounded-full cursor-pointer hidden md:block"
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
        <div className="w-72 mb-8 md:mb-0 md:w-96 h-96 flex justify-center items-center overflow-hidden relative">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
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
                  handleNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  handlePrev();
                }
              }}
              className={`absolute w-full h-full flex flex-col justify-center items-center text-center ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              {/* <img
                src={reviews[currentIndex].avatar}
                alt={reviews[currentIndex].name}
                className="w-24 h-24 rounded-full mb-4"
              /> */}
              <svg
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
              </svg>
              <h3 className="text-2xl mb-4">{reviews[currentIndex].name}</h3>
              <p className="text-lg mb-4">{reviews[currentIndex].position}</p>
              {/* <p className="mt-2">{reviews[currentIndex].text}</p> */}
              <p className="text-xl text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                commodi molestias ratione obcaecati cumque sint animi eaque
                ducimus fugit molestiae. Qui sint dignissimos maiores?
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="bg-orange-500 p-2 rounded-full cursor-pointer hidden md:block"
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
            className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
              index === currentIndex ? "bg-[#CD512F]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
