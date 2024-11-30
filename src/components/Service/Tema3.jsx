import Num from "@components/Service/Num";
function Tema3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
      <div>
        <p className="mb-8 text-xl md:text-xl">
          {" "}
          La asesoría contable precisa información y consejos para la
          optimización de recursos en material de finanzas y contabilidad
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
          <h1 className="text-2xl uppercase">Fiscal</h1>
        </div>
        <p className="text-xl mb-2">Consulta de situación fiscal ante el Servicio de Administración Tributaria</p>
        <p className="text-xl mb-4">Solicitud de Firma Electrónica (efirma) </p>
        <p className="text-xl mb-4">Declaraciones de Impuestos Estatales y Federales</p>
        <p className="text-xl mb-4">Elaboración y emisión de CFDI (factura electrónica)</p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase">Gestión Contable</h1>
        </div>
        <p className="text-xl mb-2">Elaboración de estados financieros</p>
        <p className="text-xl mb-2">Regularización contable dentro del marco legal</p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase"> Gestión empresarial</h1>
        </div>
        <p className="text-xl mb-2">Recuperación de Impuestos (IVA e ISR)</p>
        <p className="text-xl mb-2">Tramites ante SAT/IMSS y otras instituciones</p>
      </div>
    </div>
  );
}

export default Tema3;
