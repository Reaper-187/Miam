import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header wird bei Scroll leicht transparent
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            MIAM D Consulting
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/marketing">Marketing</NavLink>
            <NavLink to="/finance">Finance</NavLink>
            <NavLink to="/software">Software</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 mt-4 pb-4" : "max-h-0"
          }`}
        >
          <div className="space-y-3">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/marketing" onClick={() => setIsOpen(false)}>
              Marketing
            </MobileNavLink>
            <MobileNavLink to="/finance" onClick={() => setIsOpen(false)}>
              Finance
            </MobileNavLink>
            <MobileNavLink to="/software" onClick={() => setIsOpen(false)}>
              Software
            </MobileNavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

// Komponente für Desktop-Links
const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="relative text-gray-600 hover:text-blue-600 transition-colors font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
  >
    {children}
  </Link>
);

// Komponente für Mobile-Links
const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
  >
    {children}
  </Link>
);
