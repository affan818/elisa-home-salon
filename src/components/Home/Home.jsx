import { Link } from "react-router-dom";
import OurWork from "../OurWork/OurWork";
import Badge from "../Badges/Badge";
import PremiumCard from "../Premium/PremiumCard";

export default function Home() {
  const preBridalPkg = [
    "Facial (Hydraboost / Korean Glass)",
    "Gold bleach",
    "Full body polishing",
    " Full body bleach",
    "Full body waxing (Rica)",
    "Professional manicure",
    "Professional pedicure",
    "L'oreal hair spa",
  ];
  const premiumPkg = [
    "Chocolate wax Full hands",
    "Half legs Underarms",
    "VLCC Facial",
    "Threading Eyebrows",
    "Upperlips",
  ];

  const thirdPkg = ["Manicure", "Pedicure", "Facial", "Threading"];
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
              <button className="inline-flex items-center px-8 py-4 text-white bg-[#1A237E] rounded-full hover:bg-[#0d1b56] focus:ring-4 focus:ring-[#1A237E] transition-all transform hover:scale-105 shadow-2xl">
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

      <div className="py-16 px-8 shadow-2xl">
        <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-16 py-12">
          {/* Column 1: Text and Button */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#FF6F61] leading-tight tracking-wide drop-shadow-md">
              Discover Your Best Look with Our Expertise
            </h2>
            <p className="text-[#36454F] text-lg lg:text-xl leading-relaxed tracking-wide">
              Let our skilled artists create a timeless look tailored to your
              style. Experience unparalleled luxury and transformation with
              every service.
            </p>
            <Link to="/services">
              <button className="inline-flex items-center px-10 py-4 text-lg font-medium text-white bg-[#1A237E] rounded-full hover:bg-[#0d1b56] focus:ring-4 focus:ring-[#FF6F61] transition-all shadow-xl">
                Explore Services
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

          {/* Column 2: Professional Image Styling */}
          <div className="relative flex justify-center items-center">
            {/* Outer Decorative Frame */}
            <div className="relative flex justify-center items-center">
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                <img
                  src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-lady-putting-on-makeup-png-image_10149320.png"
                  alt="Makeup"
                  className="w-[350px] h-[450px] lg:w-[400px] lg:h-[500px] object-cover rounded-[30px]"
                />
              </div>

              {/* Accent Elements */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-[#FF6F61] to-[#FFDAB9] rounded-full blur-[80px] opacity-30"></div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-[#FFDAB9] to-[#FFEFE5] rounded-full blur-[100px] opacity-40"></div>
            </div>

            {/* Accent Elements */}
            <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-gradient-to-br from-[#FF6F61] to-[#FFDAB9] rounded-full blur-lg opacity-40"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-40 h-40 bg-gradient-to-br from-[#FFDAB9] to-[#FFEFE5] rounded-full blur-lg opacity-30"></div>
          </div>
        </div>
        <Badge />
        <div className="flex flex-wrap justify-center gap-6">
          <PremiumCard
            title="PREMIUM BRIDAL PACKAGE"
            list={preBridalPkg}
            price="899"
          />
          <PremiumCard
            title="PREMIUM HAIR REMOVAL PACKAGE"
            list={premiumPkg}
            price="1499"
          />
          <PremiumCard title="PAMPER YOURSELF" list={thirdPkg} price="1440" />
        </div>
        <div className="flex justify-center">
          <Link to="/services">
            <button className="inline-flex items-center px-10 py-4 text-lg font-medium text-white bg-[#FF6F61] rounded-full hover:bg-[#fa4d3d] transition-all shadow-xl">
              Explore More
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

        <OurWork />
      </div>
    </>
  );
}
