import React from "react";
import "./badge.css";
function Badge() {
  return (
    <div className="relative flex flex-col items-center justify-center w-[350px] h-[200px] bg-gradient-to-br from-navy-blue to-coral text-soft-cream rounded-xl shadow-lg border-[4px] border-coral transform rotate-[-15deg] hover:rotate-0 transition-all duration-700 ease-in-out">
      {/* Outer Glow Decoration */}
      <div className="absolute inset-0 rounded-xl blur-2xl opacity-40 bg-gradient-to-r from-coral to-navy-blue"></div>

      {/* Badge Content */}
      <p className="text-sm uppercase tracking-widest font-medium text-coral shimmer-text">
        Premium Salon Packages
      </p>
      <h2 className="text-4xl font-bold gradient-text mt-2">Availale Offers</h2>

      {/* Decorative Sparkles */}
      <div className="absolute top-3 left-6 w-3 h-3 bg-coral rounded-full shimmer animate-pulse"></div>
      <div className="absolute top-3 right-6 w-3 h-3 bg-coral rounded-full shimmer animate-pulse"></div>
      <div className="absolute bottom-3 left-6 w-3 h-3 bg-coral rounded-full shimmer animate-pulse"></div>
      <div className="absolute bottom-3 right-6 w-3 h-3 bg-coral rounded-full shimmer animate-pulse"></div>
    </div>
  );
}

export default Badge;
