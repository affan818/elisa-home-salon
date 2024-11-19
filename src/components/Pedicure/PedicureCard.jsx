import React, { useState } from "react";
import data from "./PedicureData.json";
function PedicureCard({onSelect}) {
  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          className="relative max-w-sm p-6 bg-gradient-to-r from-coral via-soft-cream to-navy-blue border border-navy-blue rounded-lg shadow-lg overflow-hidden"
        >
          {/* Optional Overlay for effect */}
          <div className="absolute inset-0 bg-navy-blue bg-opacity-30"></div>

          {/* Content */}
          <div className="relative z-10">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-wide text-soft-cream">
                {card.service}
              </h5>
            </a>
            <p className="mb-3 font-normal text-soft-cream">
              {card.description}
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-wide text-soft-cream">
              ₹ {card.rate}
            </h5>

            {/* Select Button */}
            <SelectButton card={card} onSelect={onSelect} />
          </div>
        </div>
      ))}
    </>
  );
}
function SelectButton({ card, onSelect }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onSelect(card, !selected); // Pass selection state to parent
  };

  return (
    <button
      onClick={handleSelect}
      className={`px-4 py-2 mt-4 text-sm font-medium text-center rounded-lg transition-all duration-300 ${
        selected
          ? "bg-gradient-to-r from-coral to-soft-cream text-white"
          : "bg-transparent border-2 border-coral text-coral"
      } hover:bg-gradient-to-r hover:from-coral hover:to-soft-cream hover:text-white focus:outline-none`}
    >
      {selected ? "Selected" : "Select"}
    </button>
  );
}

export default PedicureCard;
