import Observer from "@components/Animation/Observer";

function Contact() {
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-8">
        <div className="flex justify-center items-start flex-col md:w-[45%] md:px-0 px-8 mx-auto">
          <Observer>
            <p className="uppercase mb-12">contacto</p>
          </Observer>
          <Observer>
            <h1 className="text-6xl uppercase mb-8">
              Hagamos <span className="text-[#CD512F]">impacto</span> juntos
            </h1>
          </Observer>
          <div className="flex gap-8 items-center">
            <div className="bg-[#CD512F] w-1 h-12"></div>
            <Observer>
              <p className="text-xl">
                Tu ambición es el{" "}
                <span className="text-[#CD512F]">fundamento</span> de grandes
                alturas.
              </p>
            </Observer>
          </div>
        </div>
        <div className="flex justify-center items-center py-8 md:py-0 px-8 md:px-0">
          <Observer>
            <img src="/contact.jpg" alt="" className="md:w-screen" />
          </Observer>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:px-0 px-8">
        <div className="flex justify-center items-center">
          <Observer>
            <p className="text-start md:w-[46%] mx-auto text-xl mb-8 md:mb-0">
              Construye el siguiente nivel de tu empresa y patrimonio con un
              equipo{" "}
              <span className="text-[#CD512F]">
                multidisciplinario de abogados
              </span>{" "}
              y contadores en materia fiscal, laboral y corporativa
            </p>
          </Observer>
        </div>
        <div className="bg-[#CD512F] h-[120px] w-[320px] flex justify-center items-center">
          <Observer>
            <p className="text-white uppercase rounded-3xl border px-8 py-4 font-bold hover:bg-white hover:text-[#CD512F] hover:border-[#CD512F] transition-all duration-300 cursor-pointer">
              Contactanos
            </p>
          </Observer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
