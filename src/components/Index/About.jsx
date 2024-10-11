import Observer from "@components/Animation/Observer";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-16 md:px-0 px-8">
      <div className="flex justify-center md:justify-start items-center md:items-start flex-col">
        <Observer>
          <p className="mb-8 text-xl">Sobre nosotros</p>
        </Observer>
        <Observer>
          <h1 className="text-7xl uppercase mb-8">
            Somos GPE <span className="text-[#CD512F]"> Consultores</span>
          </h1>
        </Observer>
        <div className="flex gap-8">
          <div className="border border-[#CD512F]"></div>
          <Observer>
            <p className="pr-10 text-xl">
              Sabemos que una empresa está compuesta por múltiples sectores que
              requieren necesidades específicas en cada área donde surgen
              desafíos y oportunidades que exigen tiempo y atención inmediata
              que en ocasiones no tiene abasto. Por ello, estamos altamente
              calificados para identificar y gestionar riesgos. Somos
              propositivos con alternativas concretas para facilitar las
              actividades de tu empresa, permitiendo mayor movilidad y desahogo
              de la carga fiscal, laboral.
            </p>
          </Observer>
        </div>
      </div>
      <div>
        <Observer>
          <p className="text-xl py-8 md:py-0">
            La esencialidad con la que trabajamos el compromiso nos permite
            poder ofrecer alternativas para que tu esfuerzo se focalice en otras
            áreas que permitan expansión económica. Nuestro equipo de trabajo
            está preparado para lograr estándares altos de competitividad y
            resultados gracias a la agilidad, rapidez y eficiencia de los
            servicios que adaptamos a tus necesidades. <br /> <br /> Estamos
            convencidos que para edificar empresas prósperas es esencial
            construir una base de trabajo duro, con dedicación, fidelidad,
            honestidad y profesionalismo. Desde consultorías legal corporativa,
            planes de previsión legales, auditorias laborales, consultorías
            contables y administración de empresas, estamos listos para formar
            parte de tu equipo.
          </p>
        </Observer>
      </div>
    </div>
  );
}

export default About;
