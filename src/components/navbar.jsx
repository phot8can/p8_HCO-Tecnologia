// import { useState } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import LogoNew from "/LogoHCO_new.svg";
import navbar from "@data/navbar.json";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const obj_nav = navbar;

  return (
    <nav className="bg-blue/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur text-white p-4 md:px-6 shadow-sm sticky top-0 z-50 border-b border-blue">
      <div className="flex justify-between items-center gap-5">
        {/* md:justify-center  */}
        {location.pathname !== "/" ? (
          <div className={`flex items-center gap-6`}>
            <img
              className="h-6 object-contain cursor-pointer"
              src={LogoNew}
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
          className="md:hidden text-slate-700 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex items-center gap-2">
          {obj_nav.map((item, idx) => (
            <div key={idx}>
              {Array.isArray(item.index) ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setHoveredMenu(idx)}
                  // onMouseLeave={() => setHoveredMenu(null)}
                >
                  <div className="px-5 py-3 text-base rounded-md font-medium hover:text-white hover:bg-blue transition-colors duration-150">
                    {item.title}
                  </div>
                  {hoveredMenu === idx && (
                    <div
                      className="absolute left-0 top-full mt-3 bg-white border border-slate-200 rounded-md shadow-xl text-slate-700 z-10 w-72 overflow-hidden -translate-x-1/2"
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      {item.index.map((subItem, subIdx) => {
                        if (Array.isArray(subItem.index)) {
                          return (
                            <div key={subIdx} className="relative group">
                              <div className="px-4 py-3 hover:bg-teal-50 hover:text-blue flex items-center justify-start gap-2 text-sm">
                                <span className="text-xs">&#9666;</span>
                                <span>{subItem.title}</span>
                              </div>
                              <div className="absolute right-full top-0 ml-2 hidden group-hover:block bg-white  p-2 rounded-xl shadow-xl z-20">
                                {subItem.index.map((thirdItem, thirdIdx) => (
                                  <div
                                    key={thirdIdx}
                                    className="px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-sm rounded-md"
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
                              className="px-4 py-3 hover:bg-blue hover:text-white text-sm"
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
                  className="cursor-pointer px-5 py-3 text-base rounded-md font-medium hover:text-white hover:bg-blue transition-colors duration-150"
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
        <div className="flex flex-col gap-2 mt-4 md:hidden divide-y divide-slate-200">
          {obj_nav.map((item, idx) => (
            <div key={idx}>
              {Array.isArray(item.index) ? (
                <details className="cursor-pointer">
                  <summary className="text-slate-700 hover:text-teal-700">
                    {item.title}
                  </summary>
                  <div className="ml-4 mt-2 flex flex-col divide-y divide-slate-200">
                    {item.index.map((subItem, subIdx) =>
                      Array.isArray(subItem.index) ? (
                        <details key={subIdx} className="ml-2">
                          <summary>{subItem.title}</summary>
                          <div className="ml-4 flex flex-col divide-y divide-white/20">
                            {subItem.index.map((thirdItem, thirdIdx) => (
                              <div
                                key={thirdIdx}
                                className="py-3 text-slate-700 hover:text-teal-700"
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
                          className="py-3 text-slate-700 hover:text-teal-700"
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
                  className="cursor-pointer text-slate-700 hover:text-teal-700"
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
