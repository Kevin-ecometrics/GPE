import { useState, useEffect } from "react";

function Num() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const target = 115;
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
    <div>
      <h2 className="uppercase text-5xl mb-8">Clientes satisfechos</h2>
      <h1 className="text-6xl mb-4">
        {num}
        <span className="text-[#CD512F]">+</span>
      </h1>
    </div>
  );
}

export default Num;
