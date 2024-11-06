function Footer() {
  const links = [
    { title: "Inicio", link: "#hero" },
    { title: "Servicios", link: "#services" },
    { title: "Equipo", link: "#team" },
    { title: "Reseñas", link: "#reviews" },
    { title: "Blog", link: "#blog" },
  ];

  const year = new Date().getFullYear();

  const URL = window.location.pathname;

  return (
    <div className="md:container mx-auto py-8 px-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 mb-12">
        {URL === "/" && (
          <div className="flex justify-between flex-col md:flex-row items-start md:items-center">
            <h1 className="text-6xl uppercase mb-4 md:mb-0">¿Consultoría?</h1>
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
                <p className="flex text-xl group-hover:text-white justify-center items-center px-8">
                  Comenzar asesoría
                </p>
              </a>
            </div>
          </div>
        )}
        <div></div>
      </div>
      {URL === "/" && (
        <div className="flex  md:justify-between flex-col md:flex-row md:items-center py-12 border-t border-b border-gray-700">
          <div>
            <ul className="flex md:flex-row flex-col gap-4 mb-8 md:mb-0">
              {links.map((item, index) => (
                <a
                  href={item.link}
                  title={item.title}
                  key={index}
                  className="mx-2"
                >
                  <p className="uppercase text-base cursor-pointer hover:text-[#F29829]">
                    {item.title}
                  </p>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 px-2 md:px-0">
            <img src="" alt="1" title="logo redsocial" />
            <img src="" alt="2" title="logo redsocial" />
            <img src="" alt="3" title="logo redsocial" />
            <img src="" alt="4" title="logo redsocial" />
            <img src="" alt="5" title="logo redsocial" />
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-4">
        <p className="text-xl">© {year}. Todos los derechos reservados</p>
        <p className="text-xl">
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
