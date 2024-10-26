import React from "react";

const Hero = ({ title, subtitle }) => {
  const valores = [
    { src: "/Compromiso.webp", text: "Compromiso" },
    { src: "/Confidencialidad.webp", text: "Confidencialidad" },
    { src: "/Honestidad.webp", text: "Honestidad" },
  ];

  return (
    <div className="md:h-screen uppercase flex justify-center items-center flex-col py-64">
      <div className="flex mb-8 md:mb-0">
        <a href="/">
          <p className="hover:text-white">Inicio </p>
        </a>
        &nbsp;
        <p>/</p>
        &nbsp;
        <p className="text-[#CD512F]">Servicio</p>
      </div>
      <h1 className="text-3xl md:text-7xl md:py-8 text-center mb-16">
        {title}
      </h1>
      <h2 className="text-center text-2xl md:text-4xl mb-16">{subtitle}</h2>
      <div className="flex flex-col md:flex-row">
        {valores.map((valor, index) => (
          <div
            key={index}
            className="flex justify-between flex-col px-16 items-center "
          >
            <img src={valor.src} alt={valor.text} className="mb-8" />
            <p>{valor.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
