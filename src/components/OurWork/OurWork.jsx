import React from "react";
import clientImg from "../../../clientImage.json";

function OurWork() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#1A237E] text-center mb-10 tracking-wide">
          Our Happy Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {clientImg.map((photo) => (
            <div key={photo.id} className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out"
                />
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#FF6F61] to-transparent opacity-20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
