import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@pages/Index";
import Contact from "@pages/Contact";
import Service from "@pages/Service";
import Blogs from "@pages/Blogs";
import Home from "@pages/Home";
import BlogsDinamic from "@pages/BlogsDinamic";
import Team from "@pages/Team";
import "@styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDinamic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
