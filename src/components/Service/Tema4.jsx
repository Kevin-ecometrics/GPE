import Num from "@components/Service/Num";
function Tema4() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
      <div>
        <p className="mb-8 text-xl md:text-xl">
          {" "}
          La asesoría y representación legal proporciona orientación y asistencia a diversas empresas en situaciones que estén directamente 
          relacionadas con sus trabajadores, sus clientes y proveedores.
        </p>
        {/* <div className="flex gap-4 items-center">
          <img src="" alt="Avatar" />
          <div>
            <p className="text-2xl mb-4">Nombre:</p>
            <p className="text-2xl mb-4">Puesto:</p>
          </div>
        </div>{" "} */}
        <div>
          <Num />
        </div>
      </div>
      <div>
        <h1 className="text-5xl mb-4 uppercase">Principales servicios</h1>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">01.</span>
          <h1 className="text-2xl uppercase">Asesoría y estrategia patronal </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase">
            {" "}
            Representación y litigio laboral
          </h1>
        </div>
        <p className="text-xl mb-2"> Rescisiones de contrato</p>
        <p className="text-xl mb-2"> Atención a citatorios conciliatorios</p>
        <p className="text-xl mb-2">
          {" "}
          Representación ante los Tribunales laborales 
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase"> Atención de inspecciones </h1>
        </div>
        <p className="text-xl mb-4">
          Desahogo de inspecciones de la STPS{" "}
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">04.</span>
          <h1 className="text-2xl uppercase"> Intervención de conflictos laborales </h1>
        </div>
        <p className="text-xl mb-2">
          {" "}
          Atención profesional de conflictos presentados en el centro de trabajo
        </p>
        <p className="text-xl mb-2">Aplicación de actas administrativas </p>
        
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">05.</span>
          <h1 className="text-2xl uppercase"> Actualización de documentos legales </h1>
        </div>
        <p className="text-xl mb-4">
          Desarrollo de documentos legales que rijan las relaciones laborales con su plantilla de personal
        </p>
        <p className="text-xl mb-4">
          Elaboración y/o actualización del Reglamento Interno de Trabajo
        </p>
        <p className="text-xl mb-4">
          Protocolo para prevenir riesgos psicosociales
        </p>
        <p className="text-xl mb-4">
          Formación de comisiones mixtas
        </p>
        <p className="text-xl mb-4">
          Elaboración y aplicación de políticas internas
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">06.</span>
          <h1 className="text-2xl uppercase">Capacitación al personal </h1>
        </div>
        <p className="text-xl mb-4">
          Capacitación al personal administrativo y de Recursos Humanos sobre temas puntuales, así como de los instrumentos legales que los patrones deben observar en términos de Ley{" "}
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">07.</span>
          <h1 className="text-2xl uppercase">Auditoría laboral </h1>
        </div>
        <p className="text-xl mb-4">
          Revisión y análisis a detalle del cumplimiento de las obligaciones patronales en términos de la normatividad vigente{" "}
        </p>
      </div>
    </div>
  );
}

export default Tema4;
