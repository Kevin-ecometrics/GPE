import Observer from "@components/Animation/Observer";

function Contact() {
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-[#181817]">
        <div className="flex justify-center items-start flex-col md:w-[45%] md:px-0 px-8 mx-auto ">
          <Observer>
            <p className="uppercase mb-12 py-4">Contacto</p>
          </Observer>
          <Observer>
            <h1 className="text-6xl uppercase mb-8">
              Hagamos <span className="text-[#F29829]">impacto</span> juntos
            </h1>
          </Observer>
          <div className="flex gap-8 items-center mb-4">
            <div className="bg-[#F29829] w-1 h-full"></div>
            <Observer>
              <p className="text-start  mx-auto text-lg mb-8 md:mb-0">
                Construye el siguiente nivel de tu empresa y patrimonio con un
                equipo{" "}
                <span className="text-[#F29829]">
                  multidisciplinario de abogados
                </span>{" "}
                y contadores en materia fiscal, laboral y corporativa
              </p>
            </Observer>
          </div>
        </div>
        <div className="flex justify-center items-center py-8 md:py-0 px-8 md:px-0">
          <Observer>
            <img
              src="/contact.webp"
              alt="Imagen de Contacto"
              title="Imagen de Contacto"
              className="md:w-screen"
            />
          </Observer>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:px-0 px-8 bg-[#181817]">
        <div className="flex justify-center items-center bg-black">
          <Observer>
            <p className="text-lg">
              Tu ambición es el{" "}
              <span className="text-[#F29829]">fundamento</span> de grandes
              alturas.
            </p>
          </Observer>
        </div>
        <div className="bg-[#F29829] h-[120px] w-[320px] flex justify-center items-center">
          <Observer>
            <a href="/contact" title="Contacto">
              <p className="text-white uppercase rounded-3xl border px-8 py-4 font-bold hover:bg-white hover:text-[#F29829] hover:border-[#F29829] transition-all duration-300 cursor-pointer">
                Contáctanos
              </p>
            </a>
          </Observer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
