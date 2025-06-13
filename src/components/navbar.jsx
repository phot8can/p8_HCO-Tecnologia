import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/HCO_Logo.svg";
import navbar from "../data/navbar.json";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const navigate = useNavigate();

  const obj_nav = navbar;

  return (
    <nav className="bg-blue text-white p-4 flex justify-center items-center shadow-md z-50">
      <div className="flex items-center gap-6">
        {window.location.pathname !== "/" && (
          <img
            className="h-6 object-contain invert brightness-0"
            src={Logo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
        )}

        {obj_nav.map((item, idx) => {
          if (Array.isArray(item.index)) {
            return (
              <div
                key={idx}
                className="relative cursor-pointer"
                onClick={() => setHoveredMenu(idx)}
              >
                <div className="hover:text-blue transition-colors duration-100">
                  {item.title}
                </div>
                {hoveredMenu === idx && (
                  <div
                    className="absolute bg-blue mt-2 p-2 rounded shadow-lg text-white z-10 min-w-max"
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    {item.index.map((subItem, subIdx) => {
                      if (Array.isArray(subItem.index)) {
                        return (
                          <div key={subIdx} className="relative group">
                            <div className="px-4 py-2 hover:bg-white  hover:text-blue flex items-center justify-between gap-2">
                              <span>{subItem.title}</span>
                              <span className="text-xs">&#9656;</span>
                            </div>
                            <div className="absolute left-full top-0 ml-1 hidden group-hover:block bg-blue p-2 rounded shadow-lg z-20">
                              {subItem.index.map((thirdItem, thirdIdx) => (
                                <div
                                  key={thirdIdx}
                                  className="px-4 py-2 hover:bg-white hover:text-blue"
                                  onClick={() => {
                                    navigate(thirdItem.path);
                                    setHoveredMenu(null);
                                  }}
                                >
                                  {thirdItem.title}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={subIdx}
                            className="px-4 py-2 hover:bg-white hover:text-blue"
                            onClick={() => {
                              navigate(subItem.path);
                              setHoveredMenu(null);
                            }}
                          >
                            {subItem.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className="cursor-pointer hover:text-blue transition-colors duration-100"
                onClick={() => navigate(item.index)}
              >
                {item.title}
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
}

export default Navbar;
