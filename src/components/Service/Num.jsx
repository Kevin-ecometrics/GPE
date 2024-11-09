import { useState, useEffect } from "react";

function Num() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const target = 20;
    const interval = 50;
    const increment = Math.ceil(target / (3000 / interval));

    const timer = setInterval(() => {
      setNum((prevNum) => {
        if (prevNum >= target) {
          clearInterval(timer);
          return target;
        }
        return prevNum + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="py-4">
      <h2 className="uppercase text-5xl mb-8">Clientes Satisfechos </h2>
      <div className="flex items-start gap-2">
        <h1
          className="text-6xl mb-4"
          style={{
            maskImage: "linear-gradient(to bottom, black 75%, transparent 20%)",
          }}
        >
          {num}
        </h1>
        <span className="text-[#F29829] text-7xl">+</span>
      </div>
    </div>
  );
}

export default Num;
