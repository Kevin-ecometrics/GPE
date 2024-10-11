import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@pages/Index";
import Service from "@pages/Service";
import "@styles/index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
