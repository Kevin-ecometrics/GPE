import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@pages/Index";
import Contact from "@pages/Contact";
import Service from "@pages/Service";
import Blogs from "@pages/Blogs";
import Home from "@pages/Home";
import BlogsDinamic from "@pages/BlogsDinamic";
import Team from "@pages/Team";
import WhatsAppButton from "@components/Whatsapp";
import "@styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogsDinamic />} />
        </Routes>
        <WhatsAppButton /> {/* Botón flotante visible en todas las páginas */}
      </div>
    </BrowserRouter>
  );
}

export default App;
