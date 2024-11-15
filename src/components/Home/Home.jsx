import { Link } from "react-router-dom";
import OurWork from "../OurWork/OurWork";

export default function Home() {
  return (
    <>
      <section
        className="py-12 px-6 mx-auto my-16 bg-gradient-to-r from-[#FF6F61] to-[#FFEBCC] shadow-xl rounded-3xl"
        style={{ maxWidth: "1200px" }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:py-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-wide">
              Discover Your True Beauty with Professional Care
            </h1>
            <p className="text-white text-lg lg:text-xl leading-relaxed max-w-lg">
              Step into a world of elegance and style with top-tier makeup
              services designed exclusively for you.
            </p>
            <Link to="/about">
              <button
                className="inline-flex items-center px-8 py-4 text-white bg-[#1A237E] rounded-full hover:bg-[#0d1b56] focus:ring-4 focus:ring-[#1A237E] transition-all transform hover:scale-105 shadow-2xl"
          
              >
                Know More About Us
                <svg
                  className="w-5 h-5 ml-3 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <img
              src="https://desertrainskin.com/wp-content/uploads/2023/11/girl-img1.webp"
              alt="makeup"
              className="w-96 h-auto rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <div className="py-16 px-8 rounded-3xl shadow-2xl">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text and Button */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF6F61] leading-snug tracking-wide">
              Transform Your Look with Our Expert Makeup Services
            </h2>
            <p className="text-[#36454F] text-lg lg:text-xl leading-relaxed max-w-md">
              Our skilled makeup artists enhance your natural beauty with
              precision and elegance, tailored to your preferences. Book now and
              feel the transformation.
            </p>
            <Link to="/services">
              <button
                className="inline-flex items-center px-8 py-4 text-white bg-[#1A237E] rounded-full hover:bg-[#0d1b56] focus:ring-4 focus:ring-[#1A237E] transition-all transform hover:scale-105 shadow-2xl"
               
              >
                Our Services
                <svg
                  className="w-5 h-5 ml-3 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Column 2: Single Centered Image with Styling */}
          <div className="flex justify-center items-center">
            <div className="relative rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1523528/pexels-photo-1523528.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Makeup"
                className="w-[350px] h-[350px] object-cover rounded-full"
              />
              {/* Optional Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6F61] opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>
        <OurWork />
      </div>
    </>
  );
}
