import { useState, useEffect } from "react";
import servicesData from "../../../servicesData.json";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    selectedServices: {},
    timing: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Initialize selected services to false
    const initialSelectedServices = servicesData.reduce((acc, service) => {
      acc[service.name] = false;
      return acc;
    }, {});
    setFormData((prevData) => ({
      ...prevData,
      selectedServices: initialSelectedServices,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        selectedServices: {
          ...prevData.selectedServices,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, address, selectedServices, timing } = formData;
    const selectedServiceList = Object.keys(selectedServices).filter(
      (service) => selectedServices[service]
    );

    console.log(
      `name${name},-email${email},-Address${address},-services${selectedServiceList.join(
        ", "
      )}-message${timing}`
    );

    const whatsappMessage = `Hello, I'm interested in the following services:
    - Name: ${name}
    - Email: ${email}
    -Address:${address}
    - Services: ${selectedServiceList.join(", ")}
    - Timing: ${timing}`;

    const whatsappUrl = `https://wa.me/9022755384?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-lg font-semibold text-[#2E2C29] mb-2"
        >
          Full-Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full p-4 rounded-xl border-2 border-[#ddd] bg-transparent focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61] shadow-md text-[#2E2C29] text-lg"
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-lg font-semibold text-[#2E2C29] mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full p-4 rounded-xl border-2 border-[#ddd] bg-transparent focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61] shadow-md text-[#2E2C29] text-lg"
          required
        />
      </div>

      {/* Services Dropdown with Checkboxes */}
      <div className="mb-5 relative">
        <label className="block text-lg font-semibold text-[#2E2C29] mb-2">
          Select Services
        </label>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full text-left p-4 rounded-xl border-2 border-[#ddd] bg-transparent focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61] shadow-md text-[#2E2C29] text-lg"
        >
          {Object.keys(formData.selectedServices).filter(
            (service) => formData.selectedServices[service]
          ).length > 0
            ? Object.keys(formData.selectedServices)
                .filter((service) => formData.selectedServices[service])
                .join(", ")
            : "Select Services"}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full mt-1 w-full bg-white border border-[#ddd] rounded-xl shadow-lg p-4 z-10 max-h-60 overflow-y-auto">
            {servicesData.map((service) => (
              <label key={service.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name={service.name}
                  checked={formData.selectedServices[service.name] || false}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg text-[#2E2C29]">{service.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="address"
          className="block text-lg font-semibold text-[#2E2C29] mb-2"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your full address"
          className="w-full p-4 rounded-xl border-2 border-[#ddd] bg-transparent focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61] shadow-md text-[#2E2C29] text-lg"
          required
        />
      </div>

      {/* Message Field */}
      <div className="mb-5">
        <label
          htmlFor="timing"
          className="block text-lg font-semibold text-[#2E2C29] mb-2"
        >
          Give Date & Time
        </label>
        <textarea
          id="timing"
          name="timing"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your Date & Time Here"
          rows="5"
          className="w-full p-4 rounded-xl border-2 border-[#ddd] bg-transparent focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61] shadow-md text-[#2E2C29] text-lg"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#FF6F61] text-white py-3 px-8 rounded-xl shadow-xl hover:bg-[#FF8C73] transition-all duration-200"
        >
          Send Message to WhatsApp
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
