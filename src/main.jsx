import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { ClassContent } from "./components/ClassContent";
import { Navbar } from "./components/Navbar"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<><App /></>} />
      <Route path='/class/:number' element={<ClassContent />} />
    </Routes>
  </BrowserRouter>
);
