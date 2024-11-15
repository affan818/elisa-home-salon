import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Elisa_Home_Salon_Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="shadow-lg sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-[#FFDEE9] via-[#B5FFFC] to-[#FFAFBD] bg-opacity-95 border-gray-200 px-4 lg:px-6 py-3 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-20" alt="Logo" />
          </Link>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#FF3D3D] hover:bg-[#FFD1E1] focus:ring-4 focus:ring-[#FFD1E1] p-2 rounded-lg transition-all duration-300"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-500 ${
                  isMenuOpen ? "rotate-90 text-[#FF6F61]" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu for large screens */}
          <div
            className={`lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "block" : "hidden"
            } w-full`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 text-[#3A0CA3]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded-lg duration-200 ${
                      isActive ? "text-[#FF6F61]" : "text-[#3A0CA3]"
                    } border-b border-gray-100 hover:bg-[#FFAFBD] lg:hover:bg-transparent lg:border-0 hover:text-[#FF3D3D] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded-lg duration-200 ${
                      isActive ? "text-[#FF6F61]" : "text-[#3A0CA3]"
                    } border-b border-gray-100 hover:bg-[#FFAFBD] lg:hover:bg-transparent lg:border-0 hover:text-[#FF3D3D] lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded-lg duration-200 ${
                      isActive ? "text-[#FF6F61]" : "text-[#3A0CA3]"
                    } border-b border-gray-100 hover:bg-[#FFAFBD] lg:hover:bg-transparent lg:border-0 hover:text-[#FF3D3D] lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded-lg duration-200 ${
                      isActive ? "text-[#FF6F61]" : "text-[#3A0CA3]"
                    } border-b border-gray-100 hover:bg-[#FFAFBD] lg:hover:bg-transparent lg:border-0 hover:text-[#FF3D3D] lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Optional Login & Get Started Buttons */}
          <div className="hidden lg:flex items-center lg:order-2 space-x-4">
            <Link
              to="/contact"
              className="text-white bg-[#FF6F61] hover:bg-[#FF3D3D] rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FF6F61]"
            >
              Book Now !
            </Link>
          </div>

          {/* <Link
              to="#"
              className="text-[#3A0CA3] bg-opacity-0 hover:bg-[#FFD1E1] rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFD1E1]"
            >
              Log in
            </Link> */}
        </div>
      </nav>
    </header>
  );
}
