import Num from "@components/Service/Num";
function Tema3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
      <div>
        <p className="mb-8 text-xl md:text-3xl">
          {" "}
          La asesoría contable precisa información y consejos para la
          optimización de recursos en material de finanzas y contabilidad
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
          <h1 className="text-2xl uppercase">Consulta de situación fiscal</h1>
        </div>
        <p className="text-xl mb-2">Servicios de Administración Tributaria</p>
        <p className="text-xl mb-4">Control de ingresos y egresos</p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase">Declaraciones</h1>
        </div>
        <p className="text-xl mb-2">
          Elaboración de impuesto sobre la renta por actividad empresarial ISR
        </p>
        <p className="text-xl mb-2">
          Elaboración de presentación de impuesto al valor agregado IVA
        </p>
        <p className="text-xl mb-4">
          Elaboración y correcciones de declaración anual
        </p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase"> Facturas y notas de crédito</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">04.</span>
          <h1 className="text-2xl uppercase"> Estados financieros mensuales</h1>
        </div>
      </div>
    </div>
  );
}

export default Tema3;
