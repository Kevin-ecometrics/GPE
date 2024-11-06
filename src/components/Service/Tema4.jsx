import Num from "@components/Service/Num";
function Tema4() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
      <div>
        <p className="mb-8 text-xl md:text-3xl">
          {" "}
          La asesoría laboral individual proporciona orientación legal y
          asistencia a pymes y empresas en situaciones que afecten directamente
          su relación de trabajo.
        </p>
        <div className="flex gap-4 items-center">
          <img src="" alt="Avatar" />
          <div>
            <p className="text-2xl mb-4">Nombre:</p>
            <p className="text-2xl mb-4">Puesto:</p>
          </div>
        </div>{" "}
        <div>
          <Num />
        </div>
      </div>
      <div>
        <h1 className="text-5xl mb-4 uppercase">Principales servicios</h1>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">01.</span>
          <h1 className="text-2xl uppercase">Estrategia Patronal </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase">
            {" "}
            Representación legal y litigio especializado
          </h1>
        </div>
        <p className="text-xl mb-2"> Alilicación de actas administrativas</p>
        <p className="text-xl mb-2">
          {" "}
          Elaboración y firma de contratos individuales de trabajo
        </p>
        <p className="text-xl mb-4">lirevención de contingencias legales</p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase"> Inspecciones </h1>
        </div>
        <p className="text-xl mb-4">
          Elaboración y ratificación de reglamento interno de trabajo{" "}
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">04.</span>
          <h1 className="text-2xl uppercase"> Capacitación al personal </h1>
        </div>
        <p className="text-xl mb-2">
          Atención a citatorios por la secretaria del Trabajo y Previsión Social
          y la Defensa del trabajo
        </p>
        <p className="text-xl mb-2">
          {" "}
          Atención a citatorios por la secretaria del Trabajo y Previsión Social
          y la Defensa del trabajo
        </p>
        <p className="text-xl mb-2">Entrega de formatos legales </p>
        <p className="text-xl mb-2">
          {" "}
          Elaboración y registro de reglamento interno
        </p>
        <p className="text-xl mb-4">
          {" "}
          Implementación de protocolo psicosocial (NOM-035)
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">05.</span>
          <h1 className="text-2xl uppercase"> Auditoria Laboral </h1>
        </div>
        <p className="text-xl mb-4">
          Revisión y actualización de expedientes laborales, así como soporte
          legal
        </p>
      </div>
    </div>
  );
}

export default Tema4;
