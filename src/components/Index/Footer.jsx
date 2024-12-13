import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

function Footer() {
  const links = [
    { title: "Inicio", link: "#hero" },
    { title: "Servicios", link: "#services" },
    { title: "Equipo", link: "#team" },
    { title: "Reseñas", link: "#reviews" },
    // { title: "Blog", link: "#blog" },
  ];

  const servicios = [
    "Asesoria-laboral-individual",
    "Asesoria-contable",
    "Administracion-de-nomina",
    "Logistica-corporativa",
  ];

  const year = new Date().getFullYear();

  const URL = window.location.pathname;

  const isServicePage = servicios.some(
    (servicio) => URL === `/service/${servicio}`
  );

  return (
    <div className="md:container mx-auto mt-36 py-8 px-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 mb-12">
        <div className="flex justify-between flex-col md:flex-row items-start md:items-center">
          <h1 className="text-4xl lg:text-6xl uppercase mb-4 lg:mb-0">
            {"¿Consultoría?".split("").map((letter, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.2 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <div className="h-36 w-36 hover:bg-[#F29829] border group">
            <div className="flex justify-end items-end px-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:rotate-45 transition-transform duration-300 ease-in-out"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </div>

            <a href="/contact" title="contacto">
              <p className="flex text-2xl group-hover:text-white justify-center items-center px-8">
                Comenzar
              </p>
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex  md:justify-between flex-col md:flex-row md:items-center py-12 border-t border-b border-gray-700">
        <div>
          {URL === "/contact" || isServicePage ? (
            <ul>
              <a href="/home" title="Inicio">
                <p className="uppercase cursor-pointer text-sm hover:text-[#F29829]">
                  Inicio
                </p>
              </a>
            </ul>
          ) : (
            <ul className="flex md:flex-row flex-col gap-4 mb-8 md:mb-0">
              {links.map((item, index) => (
                <a
                  href={item.link}
                  title={item.title}
                  key={index}
                  className="mx-2"
                >
                  <p className="uppercase  cursor-pointer text-sm hover:text-[#F29829]">
                    {item.title}
                  </p>
                </a>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4 px-2 md:px-4 cursor-pointer">
          <a
            href="https://www.facebook.com/GrupoPlaneacionEmpresarial"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="size-6 hover:text-[#F29829] ease-in-out" />
          </a>
          <a
            href="https://maps.app.goo.gl/VnijB55W1ALojLNX8"
            target="_blank"
            rel="noreferrer"
          >
            <SiGooglemaps className="size-6 hover:text-[#F29829]" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-4 md:px-0">
        <p className="text-sm">© {year}. Todos los derechos reservados</p>
        <p className="text-sm">
          Desarrollado por:{" "}
          <a
            href="https://ecommetrica.com/"
            title="Ecommetrica"
            target="_blank"
            rel="noreferrer"
            className="group relative hover:text-[#F29829] text-white 
      transition-colors duration-300 ease-in-out"
          >
            Ecommetrica
            <span
              className="
        block absolute left-0 bottom-0 w-full h-[2px] bg-[#F29829] 
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out
        "
            ></span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
