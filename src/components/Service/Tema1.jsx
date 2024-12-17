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
            TRAMITE DE USO DE DENOMINACIÓN O RAZÓN SOCIAL{" "}
          </h1>
        </div>
        <p className="text-xl mb-4">
          &nbsp;Solicitar ante la Secretaria de Economía la autorización para el
          uso del nombre de la sociedad o asociación.
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase">ACTAS DE ASAMBLEA </h1>
        </div>
        <p className="text-xl mb-4">
          &nbsp;Elaboración y protocolización ante fedatario público de actas de
          asamblea:
        </p>
        <p className="text-xl mb-4">&nbsp; Aumento o disminución de capital.</p>
        <p className="text-xl mb-4">
          &nbsp; Nombramiento o cambio de directivos
        </p>
        <p className="text-xl mb-4">&nbsp; Venta o cesión de acciones</p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase">TRÁMITES ANTE SAT</h1>
        </div>
        <p className="text-xl mb-4">
          &nbsp; Gestión de citas para trámite de Firma Electrónica
        </p>
        <p className="text-xl mb-4">
          &nbsp; Análisis y selección de Régimen Fiscal
        </p>
        <p className="text-xl mb-4">&nbsp; Alta de Persona Física y Moral</p>
      </div>
    </div>
  );
}

export default Tema1;
