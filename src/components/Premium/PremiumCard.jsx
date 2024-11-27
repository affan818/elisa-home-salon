import React from "react";
import "./premiumCard.css";

function PremiumCard({ title, list, price }) {
  const preBridalPkg = list;

  // Function to handle the "Book Now" button click
  const handleWhatsAppSubmit = () => {
    const phoneNumber = "9324037029"; // Replace with your WhatsApp number including the country code (without +)
    const message = `
      *I Want to Book*
      
      _Title_: ${title}
      _Price_: ₹${price}
      
      _Selected Package_:
      ${preBridalPkg.join("\n")}
    `;

    // Encode the message for URL compatibility
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col rounded-lg bg-soft-cream shadow-lg w-96 h-[450px] p-8 my-6 border border-coral">
          <div className="pb-8 m-0 mb-8 text-center text-navy-blue border-b border-coral">
            <p className="text-sm uppercase font-semibold text-coral">
              {title}
            </p>
            <h1 className="flex justify-center gap-1 mt-4 font-bold text-navy-blue text-6xl">
              <span className="text-3xl">₹</span>
              {price}
            </h1>
          </div>
          <div className="flex-1 overflow-auto p-0 custom-scrollbar">
            <ul className="flex flex-col gap-4">
              {preBridalPkg.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-coral bg-soft-cream">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-coral"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-navy-blue">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-0 mt-auto">
            <button
              onClick={handleWhatsAppSubmit} // Call the function when the button is clicked
              className="min-w-32 w-full rounded-md bg-coral py-2 px-4 border border-transparent text-center text-sm text-soft-cream transition-all shadow-lg hover:shadow-xl focus:bg-navy-blue focus:shadow-none active:bg-navy-blue hover:bg-navy-blue active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumCard;
