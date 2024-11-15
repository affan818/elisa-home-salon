import { Link } from "react-router-dom";
import AnimatedHeader from "../AnimatedHeader.jsx/AnimatedHeader";
// import "./about.css";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-[#F7F0E3] to-[#FAF3E0] text-[#2E2C29]">
      <AnimatedHeader title="About" />

      {/* About Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 overflow-hidden">
        <div className="px-8 mx-auto sm:px-10 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-12">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-[#2E2C29]">
                Hello, we're <span className="text-[#FF6F61]">Elisa</span> Home
                Salon
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2E2C29] max-w-3xl tracking-wide font-light">
                Welcome to a world of beauty, elegance, and sophistication where
                every look is a masterpiece. We specialize in creating looks
                that empower you to feel confident, radiant, and unforgettable.
                Makeup is not just about enhancement—it’s about creating
                timeless elegance, making you feel graceful and confident. We
                make sure to intensify your natural beauty for each of your
                special events. Together, we embark on a journey of
                transformation, where your vision meets our artistry. We help
                you create a personalized look that emphasizes your inner
                beauty, ensuring you leave a lasting impression wherever you go.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center">
              <img
                className="relative w-full max-w-4xl mx-auto rounded-3xl border-8 border-gradient-to-r from-[#FF6F61] via-[#FFAD60] to-[#FF6F61] shadow-2xl"
                src="https://desertrainskin.com/wp-content/uploads/2023/11/girl-img1.webp"
                alt="Elisa"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" py-16 sm:py-20 text-center shadow-lg">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-6">
          Ready to Elevate Your Beauty? Begin Your Glamorous Transformation
          Today!
        </h3>
        <p className="text-lg sm:text-xl mb-8 p-10">
          Whether it’s your wedding day, a photoshoot, or any other special
          occasion, we make you feel like royalty. We create looks that embody
          your elegance and sophistication.
        </p>
        <Link to="/contact">
          <button className="inline-flex items-center px-8 py-4 text-white bg-[#1A237E] rounded-full hover:bg-[#0d1b56] focus:ring-4 focus:ring-[#1A237E] transition-all transform hover:scale-105 shadow-2xl">
            Book Your Slots
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
      </section>
    </div>
  );
}
