import React from "react";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader.jsx";
import ContactForm from "../contactform/Contactfrom";
const Contact = () => {
  return (
    <div className="bg-[#FAF3E0] text-[#2E2C29]">
      {/* Header Section */}
      <AnimatedHeader title="Contact" />

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-12 lg:px-20 relative">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div className="relative z-10 bg-transparent p-6 rounded-xl shadow-lg border-2 border-[#ddd] overflow-hidden">
            <h2 className="text-3xl font-extrabold text-[#1A237E] mb-4">
              Contact Us
            </h2>
            <p className="text-[#757575] text-lg mb-6 leading-relaxed">
              We’d love to hear from you. Please fill out the form below, and we
              will get back to you as soon as possible.
            </p>

            <ContactForm />
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/29354290/pexels-photo-29354290/free-photo-of-elegant-portrait-of-a-glamorous-woman.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Luxurious Salon"
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
