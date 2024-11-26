import Num from "@components/Service/Num";

function Tema1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
      <div>
        <p className="mb-8 text-xl md:text-xl">
          {" "}
          La logística corporativa permite evaluar, planificar y llevar control
          y llevar con éxito la eficiencia operativa, así como una estricta
          gestión de información y registros.
        </p>
        {/* <div className="flex gap-4 items-center mb-8">
          <img src="" alt="Avatar" />
          <div>
            <p>Nombre:</p>
            <p>Puesto:</p>
          </div>
        </div> */}
        <div>
          <Num />
        </div>
      </div>
      <div>
        <h1 className="text-5xl mb-4 uppercase">Principales servicios</h1>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">01.</span>
          <h1 className="text-2xl uppercase">
            Deshaogo de representación jurídica
          </h1>
        </div>
        <p className="text-xl mb-4">
          &nbsp;Para obtener permiso de utilizar un nombre para una empresa.
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase">
            Elaboración de la asamblea de socios
          </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase">
            Tramite ante fedatario público
          </h1>
        </div>
        <p className="text-xl mb-4">&nbsp; Para validez legal de documentos</p>

        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">04.</span>
          <h1 className="text-2xl uppercase">Firma Electrónica </h1>
        </div>
        <p className="text-xl mb-4">
          &nbsp; De los socios y/o representante legal de la empresa en
          constitución.
        </p>

        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">05.</span>
          <h1 className="text-2xl uppercase">
            Empadronamiento de personas físicas y morales
          </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">06.</span>
          <h1 className="text-2xl uppercase">Apertura de cuenta bancaria</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">07.</span>
          <h1 className="text-2xl uppercase">
            Registro patronal ante el IMSS
          </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">08.</span>
          <h1 className="text-2xl uppercase">Alta ante el INFONAVIT</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">09.</span>
          <h1 className="text-2xl uppercase">Alta en FONACOT</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">10.</span>
          <h1 className="text-2xl uppercase">Obtención de folio del REPSE</h1>
        </div>
      </div>
    </div>
  );
}

export default Tema1;
