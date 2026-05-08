import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from "./components/Projects";
import Events from "./components/Events";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-page" element={<Projects />} />
        <Route path="/events-page" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
