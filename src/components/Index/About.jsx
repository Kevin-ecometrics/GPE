import Observer from "@components/Animation/Observer";

function About() {
  return (
    <div className="py-16">
      <Observer>
        <p className="text-xl ">Sobre nosotros</p>
      </Observer>
      <div className="grid grid-cols-1 md:grid-cols-2 py-16 md:px-0 px-4  gap-4">
        <div className="flex justify-center md:justify-start items-start md:items-start flex-col md:w-[80%]">
          <Observer>
            <h1 className="text-6xl uppercase mb-8">
              Somos GPE <span className="text-[#F29829]"> Consultores</span>
            </h1>
          </Observer>
          <div className="flex gap-8">
            <div className="border border-[#F29829]"></div>
            <Observer>
              <p className="pr-10 text-lg">
                Estamos altamente calificados para identificar y gestionar
                riesgos. Somos propositivos con alternativas concretas para
                facilitar las actividades de tu empresa, permitiendo mayor
                movilidad y desahogo de la carga fiscal, laboral.
              </p>
            </Observer>
          </div>
        </div>
        <div>
          <Observer>
            <p className="text-lg py-8 md:py-0">
              La esencialidad con la que trabajamos el compromiso nos permite
              poder ofrecer alternativas para que tu esfuerzo se focalice en
              otras áreas que permitan expansión económica. Nuestro equipo de
              trabajo está preparado para lograr estándares altos de
              competitividad y resultados gracias a la agilidad, rapidez y
              eficiencia de los servicios que adaptamos a tus necesidades.{" "}
              <br /> <br /> Estamos convencidos que para edificar empresas
              prósperas es esencial construir una base de trabajo duro, con
              dedicación, fidelidad, honestidad y profesionalismo. Desde
              consultorías legal corporativa, planes de previsión legales,
              auditorias laborales, consultorías contables y administración de
              empresas, estamos listos para formar parte de tu equipo.
            </p>
          </Observer>
        </div>
      </div>
    </div>
  );
}

export default About;
