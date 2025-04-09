import blogs from "@components/Index/ListBlogs";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // Estado para manejar el cursor
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const handleDragStart = () => {
    setIsDragging(true); // Cambiar el estado para indicar que se está arrastrando
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false); // Restablecer el estado del cursor
    const offset = info.offset.x; // Distancia arrastrada
    const width = carouselRef.current.offsetWidth / 2; // Ancho de un elemento (50% del carrusel)

    if (offset < -width / 4) {
      // Arrastrar hacia la izquierda
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, blogs.length - 1));
    } else if (offset > width / 4) {
      // Arrastrar hacia la derecha
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="scroll-mt-48 relative " id="blog">
      <div className="md:container mx-auto px-8 md:px-24">
        <div className="flex justify-between items-start md:items-end mb-8 md:flex-row flex-col md:px-4">
          <h1 className="text-5xl uppercase">
            GACETA en materia <span className="text-[#F29829]">fiscal</span> y{" "}
            <span className="text-[#F29829]">laboral</span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* Botón izquierdo */}
          <button
            onClick={handlePrev}
            className="bg-gray-900 text-white p-3 hidden md:block rounded-full hover:bg-[#F29829] transition-colors absolute left-4 z-50"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Carrusel */}
          <div
            className="relative overflow-hidden  hidden md:block "
            ref={carouselRef}
          >
            <motion.div
              className={`flex transition-transform duration-75 ease-in-out ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              initial={{ x: 0 }}
              animate={{ translateX: `-${currentIndex * 50}%` }} // Usar Tailwind para manejar el desplazamiento
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {[...blogs].reverse().map((blog, index) => (
                <motion.div
                  className="w-[50%] flex-shrink-0 px-4"
                  key={index}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="overflow-hidden relative group">
                    <a href={blog.link}>
                      <img
                        src={blog.image}
                        alt="Blog"
                        title="Blog"
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </a>

                    <div className="py-8 flex justify-between flex-col md:flex-row items-start gap-8">
                      <div className="flex-col md:w-[80%]">
                        <a href={blog.link}>
                          <h1 className="text-3xl uppercase mb-4">
                            {blog.title}
                          </h1>
                        </a>

                        <p>{blog.description}</p>
                      </div>
                      <a
                        className="p-3 h-32 w-full md:w-auto bg-gray-900 group-hover:bg-[#F29829]"
                        href={blog.link}
                      >
                        <div className="flex justify-end items-center mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2"
                            className="group-hover:rotate-45 transition-transform duration-300 ease-in-out cursor-pointer"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 7l-10 10" />
                            <path d="M8 7l9 0l0 9" />
                          </svg>
                        </div>
                        <p className="flex justify-center items-center uppercase text-white">
                          leer más
                        </p>
                      </a>
                      <div className="top-5 right-6 absolute bg-black px-4 py-2 rounded-full">
                        <p className="text-white uppercase font-medium">
                          {blog.date}
                        </p>
                      </div>
                      <div className="top-5 left-6 absolute bg-white px-4 py-2 rounded-full">
                        <p className="text-black uppercase font-medium">
                          {blog.theme}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carrusel para móviles */}
          <div className="md:hidden flex flex-col gap-4">
            {[...blogs].reverse().map((blog, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer relative"
              >
                <img src={blog.image} alt={blog.title} />
                <div className="flex gap-8">
                  <p className="absolute top-4 left-4 p-4 bg-black text-white rounded-full">
                    {blog.theme}
                  </p>
                  <p className="absolute top-4 right-4 p-4 bg-black text-white rounded-full">
                    {blog.date}
                  </p>
                </div>
                <div className="py-12 px-0">
                  <h2 className="text-2xl mb-8">{blog.title}</h2>
                  <p className="text-xl mb-8 md:w-[80%]">{blog.description}</p>
                  <button className="bg-[#F29829] hover:opacity-80 rounded-full px-16 py-6">
                    <p className="text-white uppercase">Leer más</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Botón derecho */}
          <button
            onClick={handleNext}
            className="bg-gray-900 text-white p-3 rounded-full hidden md:block hover:bg-[#F29829] transition-colors absolute right-4 z-50"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
