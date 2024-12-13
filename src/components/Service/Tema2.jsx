import Num from "@components/Service/Num";
function Tema2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
      <div>
        <p className="mb-8 text-xl md:text-xl">
          {" "}
          La Administración de nómina permite supervisar y hacer cumplir las
          obligaciones y derechos de los colaboradores en tiempo y forma para
          mantener la satisfacción laboral evitando rotaciones y fomentando un
          crecimiento continuo.
        </p>
        {/* <div className="flex gap-4 items-center">
          <img src="" alt="Avatar" />
          <div>
            <p>Nombre:</p>
            <p>Puesto:</p>
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
          <h1 className="text-2xl uppercase">Apertura de Registro Patronal</h1>
          </div>
          <p className="mb-4 text-xl">Patrón Persona Física y Persona Moral</p>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">02.</span>
          <h1 className="text-2xl uppercase"> Movimientos afiliatorios </h1>
        </div>
        <p className="mb-4 text-xl">Solicitud y renovación de Certificado Digital 
        para movimientos afiliatorios</p>
        <p className="mb-4 text-xl">Altas, bajas e incapacidades</p>

        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">03.</span>
          <h1 className="text-2xl uppercase">Cálculo de nómina</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">04.</span>
          <h1 className="text-2xl uppercase">
            {" "}
            Dispersión en el pago de nómina
          </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">05.</span>
          <h1 className="text-2xl uppercase">
            {" "}
            Asesoría de capitales constitutivos
          </h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="font-bold text-2xl text-[#F29829]">06.</span>
          <h1 className="text-2xl uppercase"> Timbrado de recibos de nómina</h1>
        </div>
      </div>
    </div>
  );
}

export default Tema2;
