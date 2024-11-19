import { useState } from "react";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";
import ChocolateCard from "./ChocolateCard";

function ChocolatePage() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle selection
  const handleSelection = (item) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  // Generate WhatsApp message
  const sendToWhatsApp = () => {
    const message = selectedItems
      .map((item) => `Service: ${item.service}, Rate: ₹${item.rate}`)
      .join("\n");
    const whatsappURL = `https://wa.me/9324037029?text=${encodeURIComponent(
      `Hi, I'd like to make a reservation for the following services:\n${message}`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-[#FAF3E0] text-[#2E2C29] min-h-screen flex flex-col">
      <AnimatedHeader title="Chocolate Wax" />
      <section className="bg-gradient-to-br py-16 px-8 rounded-3xl shadow-2xl flex-1">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 max-w-screen-xl mx-auto">
          <ChocolateCard onSelect={handleSelection} />
        </div>
      </section>
      {/* Book Now Button */}
      {selectedItems.length > 0 && (
        <div className="mt-auto py-4 px-6 text-center">
          <button
            onClick={sendToWhatsApp}
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-coral to-soft-cream rounded-lg shadow-lg hover:from-soft-cream hover:to-coral focus:outline-none focus:ring-4 focus:ring-coral transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}

export default ChocolatePage;
