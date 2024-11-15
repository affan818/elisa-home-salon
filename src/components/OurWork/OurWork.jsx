import React from "react";
import clientImg from "../../../clientImage.json";
function OurWork() {
  return (
    <div className=" py-12 px-6 rounded-lg ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-[#FF6F61] text-center mb-10 tracking-wide">
          Our Happy Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {clientImg.map((photo) => (
            <div key={photo.id} className="flex justify-center items-center">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover rounded-full shadow-xl border-4 border-[#FF6F61]"
                />
                {/* Optional Overlay for Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6F61] to-transparent opacity-0 hover:opacity-30 rounded-full transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
