import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Elisa_Home_Salon_Logo.png";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FFF5E1] to-[#FFDAB9] text-[#36454F] py-8 px-4">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:flex md:justify-between mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-20"
                alt="Elisa Make Over Logo"
              />
            </Link>
          </div>

          {/* Quick Links and Follow Us */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-2">
            <div>
              <h2 className="mb-4 text-md font-semibold uppercase tracking-widest text-navy-blue">
                Quick Links
              </h2>
              <ul className="text-navy-blue font-medium space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#FF6F61] transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#FF6F61] transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#FF6F61] transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#FF6F61] transition duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Us  */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-2">
            <div>
              <h2 className="mb-4 text-md font-semibold uppercase tracking-widest text-navy-blue">
                Follow Us
              </h2>
              <ul className="text-navy-blue font-medium space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/elisa.makeover"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center hover:text-[#FF6F61] transition duration-300"
                  >
                    <FaFacebook className="mr-2" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/elisa.makeover/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center hover:text-[#FF6F61] transition duration-300"
                  >
                    <FaInstagram className="mr-2" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#36454F] sm:mx-auto" />

        {/* Footer Bottom */}
        <div className=" text-center text-sm text-navy-blue">
          <span>© 2023 Elisa Home Salon. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
