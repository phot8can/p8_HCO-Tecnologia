// import { useState } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "/HCO_Logo.svg";
import navbar from "@data/navbar.json";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const obj_nav = navbar;

  return (
    <nav className="bg-blue text-white p-4 shadow-md z-50 sticky top-0">
      <div className="flex justify-between items-center gap-5">
        {/* md:justify-center  */}
        {location.pathname !== "/" ? (
          <div className={`flex items-center gap-6`}>
            <img
              className="h-6 object-contain invert brightness-0 cursor-pointer"
              src={Logo}
              alt="Logo"
              loading="lazy"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/");
              }}
            />
          </div>
        ) : (
          <>
            <p></p>
          </>
        )}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex gap-6">
          {obj_nav.map((item, idx) => (
            <div key={idx}>
              {Array.isArray(item.index) ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setHoveredMenu(idx)}
                >
                  <div className="hover:text-gray-dark transition-colors duration-100">
                    {item.title}
                  </div>
                  {hoveredMenu === idx && (
                    <div
                      className="absolute bg-blue mt-2 p-2 rounded shadow-lg text-white z-10 min-w-max transform origin-top-left -translate-x-72"
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      {item.index.map((subItem, subIdx) => {
                        if (Array.isArray(subItem.index)) {
                          return (
                            <div key={subIdx} className="relative group">
                              <div className="px-4 py-2 hover:bg-white hover:text-blue flex items-center justify-left gap-2">
                                <span className="text-xs">&#9666;</span>
                                <span>{subItem.title}</span>
                              </div>
                              <div className="absolute right-full top-0 ml-1 hidden group-hover:block bg-blue p-2 rounded shadow-lg z-20">
                                {subItem.index.map((thirdItem, thirdIdx) => (
                                  <div
                                    key={thirdIdx}
                                    className="px-4 py-2 hover:bg-white hover:text-blue"
                                    onClick={() => {
                                      window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                      });
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
                              className="px-4 py-2 hover:bg-white hover:text-blue max-w-96 break-before-auto"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
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
              ) : (
                <div
                  className="cursor-pointer hover:text-gray-dark transition-colors duration-100"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(item.index);
                  }}
                >
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          {obj_nav.map((item, idx) => (
            <div key={idx}>
              {Array.isArray(item.index) ? (
                <details className="cursor-pointer">
                  <summary className="hover:text-gray-dark">
                    {item.title}
                  </summary>
                  <div className="ml-4 mt-2 flex flex-col ">
                    {item.index.map((subItem, subIdx) =>
                      Array.isArray(subItem.index) ? (
                        <details key={subIdx} className="ml-2">
                          <summary>{subItem.title}</summary>
                          <div className="ml-4 flex flex-col divide-y divide-white/20">
                            {subItem.index.map((thirdItem, thirdIdx) => (
                              <div
                                key={thirdIdx}
                                className="py-3 hover:text-blue"
                                onClick={() => {
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                  navigate(thirdItem.path);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {thirdItem.title}
                              </div>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <div
                          key={subIdx}
                          className="py-3 hover:text-blue"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            navigate(subItem.path);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {subItem.title}
                        </div>
                      )
                    )}
                  </div>
                </details>
              ) : (
                <div
                  className="cursor-pointer hover:text-gray-dark"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(item.index);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
