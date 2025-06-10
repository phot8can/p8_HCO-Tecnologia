import { Routes, Route } from "react-router-dom";
import IndexLayout from "./index"; // Este es tu index.jsx
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Services from "./pages/services";
import Contactus from "./pages/contactus";
import './index.css'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<Home />} /> 
        <Route path="/about" element= {<About/>}/>
        <Route path="/services" element= {<Services/>}/>
        <Route path="/info" element= {<Contactus/>}/>
        <Route path="*" element= {<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
