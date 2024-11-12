/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import blogs from "@components/Index/ListBlogs";
import { useLocation } from "react-router-dom";
import PoliticasDePrivacidad from "@components/Modal/Privacy";
import TerminosYCondiciones from "@components/Modal/Terms";
import SiteMap from "@components/Modal/SiteMap";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import Logo from "/logo.webp";
function Header() {
  const list = [
    { name: "Servicios", link: "#services" },
    { name: "Contacto", link: "#contact" },
    { name: "Equipo", link: "#team" },
    { name: "Reseñas", link: "#reviews" },
    // { name: "Blog", link: "#blog" },
  ];

  const listService = [
    {
      name: "Logistica corporativa",
      link: "/service/Logistica-corporativa",
    },
    {
      name: "Administracion de nomina",
      link: "/service/Administracion-de-nomina",
    },
    {
      name: "Asesoria contable",
      link: "/service/Asesoria-contable",
    },
    {
      name: "Asesoria laboral individual",
      link: "/service/Asesoria-laboral-individual",
    },
  ];

  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleURL = (link) => {
    setActiveLink(link);
  };

  const Menu = () => {
    setMenu(!menu);
  };

  const handleURLMenu = (link) => {
    Menu();
    setActiveLink(link);
  };

  const year = new Date().getFullYear();

  const urlMain = useLocation().pathname;

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Modal = ({ isOpen, content, onClose }) => {
    if (!isOpen) return null;

    return (
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded relative w-96 md:w-[600px] shadow-sm shadow-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="absolute top-2 right-2">
                <button onClick={onClose} className="text-black cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="hover:text-[#F29829]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        menu
          ? "bg-black"
          : isScrolled
          ? "bg-black bg-opacity-80"
          : "bg-transparent"
      }`}
    >
      {" "}
      <Modal isOpen={modalIsOpen} content={modalContent} onClose={closeModal} />
      <div className="container mx-auto flex justify-between items-center py-4  h-[140px] md:px-0 px-4">
        <div className="flex gap-4 items-center">
          <a href="/home" title="Home">
            <img
              src={Logo}
              className="w-12 h-12"
              alt="Logo GPE"
              title="Logo GPE"
            />
          </a>
          <AnimatePresence mode="popLayout">
            {isScrolled && (
              <motion.p
                className="text-white font-bold ml-2 md:block hidden hover:text-[#F29829] ease-out cursor-pointer "
                initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <a href="/home">GPE CONSULTORES</a>
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {menu
          ? null
          : (urlMain === "/home" || urlMain === "/") && (
              <ul className="md:flex hidden relative z-30">
                {list.map((item, index) => (
                  <a
                    href={item.link}
                    title={item.name}
                    onClick={() => handleURL(item.link)}
                    key={index}
                  >
                    <p
                      className={`mx-4 uppercase text-white cursor-pointer font-bold ${
                        activeLink === item.link
                          ? "text-white"
                          : "hover:text-[#F29829]"
                      }`}
                    >
                      {item.name}
                    </p>
                  </a>
                ))}
              </ul>
            )}

        <div className="flex gap-4 items-center">
          <a href="/contact" title="contacto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="hover:text-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>{" "}
          </a>
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="hover:text-white cursor-pointer transition-transform ease-in-out duration-300 transform rotate-90"
              onClick={Menu}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="hover:text-white cursor-pointer transition-transform ease-in-out duration-300 transform rotate-0"
              onClick={Menu}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          )}
        </div>
      </div>
      {menu && (
        <div
          className="flex justify-center items-start border-t-2 bg-black border-gray-700   
        "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto h-screen md:px-0 px-4">
            <div className="md:py-24">
              {(urlMain === "/" || urlMain === "/home") && (
                <ul className=" uppercase text-2xl ">
                  {list.map((item, index) => (
                    <li key={index} className="mb-4 py-4">
                      <a
                        href={item.link}
                        title={item.name}
                        onClick={() => handleURLMenu(item.link)}
                        className="hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {urlMain.startsWith("/service/") && (
                <ul className="text-2xl">
                  {listService.map((item, index) => (
                    <li key={index} className="mb-4 py-4">
                      <a
                        href={item.link}
                        title={item.name}
                        onClick={() => handleURLMenu(item.link)}
                        className={`hover:text-white uppercase ${
                          urlMain === item.link ? "text-[#F29829]" : ""
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {urlMain === "/contact" && (
                <div className="flex flex-col gap-4">
                  <p className="text-2xl uppercase text-white">
                    Información de contacto
                  </p>{" "}
                  <a href="tel:6646085340" className="text-lg hover:text-white">
                    <p className="text-lg hover:text-white">
                      Tel: 664 608 53 40
                    </p>
                  </a>
                  <a
                    href="mailto:legal@gpeconsultores.com.mx"
                    className="text-lg hover:text-white"
                  >
                    <p className="text-lg hover:text-white">
                      Email: legal@gpeconsultores.com.mx{" "}
                    </p>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/QC4jvxeinQf2kvfd6"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <p className="text-lg hover:text-white">
                      Direccion: Blvd. Gustavo Diaz Ordaz No. 12649 Local 17G-B,
                      El Paraiso, Tijuana, Baja California.{" "}
                    </p>
                  </a>
                </div>
              )}
              {urlMain === "/blogs" && (
                <div className="flex flex-col gap-4">
                  <p className="text-2xl uppercase text-white">
                    Información de contacto
                  </p>{" "}
                  <a href="tel:6646085340" className="text-lg hover:text-white">
                    <p className="text-lg hover:text-white">
                      Tel: 664 608 53 40
                    </p>
                  </a>
                  <a
                    href="mailto:legal@gpeconsultores.com.mx"
                    className="text-lg hover:text-white"
                  >
                    <p className="text-lg hover:text-white">
                      Email: legal@gpeconsultores.com.mx{" "}
                    </p>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/QC4jvxeinQf2kvfd6"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <p className="text-lg hover:text-white">
                      Direccion: Blvd. Gustavo Diaz Ordaz No. 12649 Local 17G-B,
                      El Paraiso, Tijuana, Baja California.{" "}
                    </p>
                  </a>
                </div>
              )}
              {urlMain === "/blogs/" && (
                <div className="flex flex-col gap-4">
                  <p className="text-2xl uppercase text-white">
                    Información de contacto
                  </p>{" "}
                  <a href="tel:6646085340" className="text-lg hover:text-white">
                    <p className="text-lg hover:text-white">
                      Tel: 664 608 53 40
                    </p>
                  </a>
                  <a
                    href="mailto:legal@gpeconsultores.com.mx"
                    className="text-lg hover:text-white"
                  >
                    <p className="text-lg hover:text-white">
                      Email: legal@gpeconsultores.com.mx{" "}
                    </p>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/QC4jvxeinQf2kvfd6"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <p className="text-lg hover:text-white">
                      Direccion: Blvd. Gustavo Diaz Ordaz No. 12649 Local 17G-B,
                      El Paraiso, Tijuana, Baja California.{" "}
                    </p>
                  </a>
                </div>
              )}
              {urlMain === "/team" && (
                <div className="flex flex-col gap-4">
                  <p className="text-2xl uppercase text-white">
                    Información de contacto
                  </p>{" "}
                  <a href="tel:6646085340" className="text-lg hover:text-white">
                    <p className="text-lg hover:text-white">
                      Tel: 664 608 53 40
                    </p>
                  </a>
                  <a
                    href="mailto:legal@gpeconsultores.com.mx"
                    className="text-lg hover:text-white"
                  >
                    <p className="text-lg hover:text-white">
                      Email: legal@gpeconsultores.com.mx{" "}
                    </p>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/QC4jvxeinQf2kvfd6"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <p className="text-lg hover:text-white">
                      Direccion: Blvd. Gustavo Diaz Ordaz No. 12649 Local 17G-B,
                      El Paraiso, Tijuana, Baja California.{" "}
                    </p>
                  </a>
                </div>
              )}
              <p className="text-start absolute top-[870px]">
                &copy; {year} Todos los derechos reservados
              </p>
            </div>

            <div className="md:border-l border-gray-700 md:py-24 ">
              <ul className=" text-lg uppercase cursor-pointer md:text-end mb-8">
                <li onClick={() => openModal(<PoliticasDePrivacidad />)}>
                  <p className="hover:text-white mb-4">
                    Politicas de privacidad
                  </p>
                </li>
                <li onClick={() => openModal(<TerminosYCondiciones />)}>
                  <p className="hover:text-white mb-4">
                    Terminos y condiciones
                  </p>
                </li>
                <li onClick={() => openModal(<SiteMap />)}>
                  <p className="hover:text-white">Ubicación</p>
                </li>
              </ul>

              <div className="border-t w-screen border-gray-700"></div>
              <p className="text-start py-4 mb-8 block md:hidden">
                &copy; {year} All rights reserved
              </p>

              <div className="hidden md:block">
                {/* <h1 className="px-4 text-2xl hidden md:block uppercase py-4">
                  Ultimos blogs
                </h1>
                <div className="flex gap-4 px-4">
                  {blogs.map((blog, index) => (
                    <div key={index} className="flex flex-col gap-4 py-4">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-[300px] h-[300px]
                        hover:scale-105 transition-transform duration-300 ease-in
                      object-cover"
                      />
                      <div>
                        <h1 className="text-lg font-bold uppercase">
                          {blog.title}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div> */}
                <div className="border-t w-screen border-gray-700"></div>
                <div className="flex gap-4 px-4 p-8 justify-end">
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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
