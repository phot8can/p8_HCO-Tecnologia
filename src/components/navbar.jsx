import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/HCO_Logo.svg";

function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-blue text-white p-4 flex justify-center items-center shadow-md">
      <div className="flex items-center gap-6">
        <img
          className="h-6 object-contain invert brightness-0"
          src={Logo}
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <div
          className="cursor-pointer hover:text-blue-300"
          onClick={() => navigate("/")}
        >
          Inicio
        </div>
        <div
          className="cursor-pointer hover:text-blue-300"
          onClick={() => navigate("/about")}
        >
          Nosotros
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsServicesOpen(true)}
        >
          <div className="hover:text-blue-300">Servicios</div>
          {isServicesOpen && (
            <div
              className="absolute bg-blue mt-2 p-2 rounded shadow-lg text-white"
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div
                className="px-4 py-2 hover:bg-blue-100"
                onClick={() => navigate("/services?categoria=automatizacion&item=")}
              >
                Automatización
              </div>
              <div
                className="px-4 py-2 hover:bg-blue-100"
                onClick={() => navigate("/services/robotica")}
              >
                Robótica
              </div>
              <div
                className="px-4 py-2 hover:bg-blue-100"
                onClick={() => navigate("/services/mantenimiento")}
              >
                Mantenimiento
              </div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer hover:text-blue-300"
          onClick={() => navigate("/info")}
        >
          Contactos
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
