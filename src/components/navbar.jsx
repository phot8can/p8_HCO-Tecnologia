import { useState, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import LogoNew from "/LogoHCO_new.svg";
import navbar from "@data/navbar.json";

// Componente optimizado para elementos de menú individuales
const NavItem = memo(({ item, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = Array.isArray(item.index);

  if (!hasSubmenu) {
    return (
      <button
        onClick={() => onNavigate(item.index)}
        className="px-4 py-2 text-sm lg:text-base font-semibold hover:text-white transition-all duration-200 relative group"
      >
        {item.title}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </button>
    );
  }

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-4 py-2 text-sm lg:text-base font-semibold hover:text-white transition-all duration-200">
        {item.title}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Submenu Desk */}
      <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="bg-white rounded-xl shadow-2xl border border-slate-100 w-64 overflow-hidden py-2">
          {item.index.map((subItem, idx) => {
            const hasThirdLevel = Array.isArray(subItem.index);
            return (
              <div key={idx} className="relative group/sub">
                {hasThirdLevel ? (
                  <>
                    <div className="px-4 py-3 text-sm text-slate-700 font-medium flex items-center justify-between hover:bg-slate-50 cursor-default">
                      {subItem.title}
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <div className="absolute left-full top-0 ml-1 opacity-0 group-hover/sub:opacity-100 translate-x-2 group-hover/sub:translate-x-0 pointer-events-none group-hover/sub:pointer-events-auto transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 w-64 overflow-hidden py-2">
                        {subItem.index.map((third, tIdx) => (
                          <button
                            key={tIdx}
                            onClick={() => onNavigate(third.path)}
                            className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-blue hover:text-white transition-colors"
                          >
                            {third.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => onNavigate(subItem.path)}
                    className="w-full text-left px-4 py-3 text-sm text-slate-700 font-medium hover:bg-blue hover:text-white transition-colors"
                  >
                    {subItem.title}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

NavItem.displayName = "NavItem";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback((path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
    
    setIsMobileMenuOpen(false);
  }, [navigate]);

  return (
    <nav className="bg-blue/95 backdrop-blur-md text-white sticky top-0 z-[100] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section - Hidden on root "/" */}
          <div className="flex-shrink-0 min-w-[120px]">
            {location.pathname !== "/" && (
              <img
                className="h-8 md:h-10 w-auto object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300"
                src={LogoNew}
                alt="HCO Tecnología"
                onClick={() => handleNavigation("/")}
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 h-full">
            {navbar.map((item, idx) => (
              <NavItem key={idx} item={item} onNavigate={handleNavigation} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-blue border-b border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-blue/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
          {navbar.map((item, idx) => (
            <div key={idx} className="border-b border-white/5 last:border-0">
              {Array.isArray(item.index) ? (
                <details className="group">
                  <summary className="flex items-center justify-between py-4 text-base font-semibold cursor-pointer list-none">
                    {item.title}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 pb-4 space-y-2">
                    {item.index.map((subItem, sIdx) => (
                      <div key={sIdx}>
                        {Array.isArray(subItem.index) ? (
                          <details className="group/sub">
                            <summary className="flex items-center justify-between py-2 text-sm text-slate-300 font-medium list-none">
                              {subItem.title}
                              <ChevronDown className="h-3 w-3 group-open/sub:rotate-180" />
                            </summary>
                            <div className="pl-4 py-2 space-y-2 border-l border-white/10 bg-white/5 rounded-r-lg">
                              {subItem.index.map((third, tIdx) => (
                                <button
                                  key={tIdx}
                                  onClick={() => handleNavigation(third.path)}
                                  className="w-full text-left py-2 text-sm text-slate-200 hover:text-white"
                                >
                                  {third.title}
                                </button>
                              ))}
                            </div>
                          </details>
                        ) : (
                          <button
                            onClick={() => handleNavigation(subItem.path)}
                            className="w-full text-left py-3 text-sm text-slate-300 font-medium hover:text-white"
                          >
                            {subItem.title}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <button
                  onClick={() => handleNavigation(item.index)}
                  className="w-full text-left py-4 text-base font-semibold hover:text-slate-300 transition-colors"
                >
                  {item.title}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

