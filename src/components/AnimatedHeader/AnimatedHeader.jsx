import React, { useEffect, useState } from "react";

function AnimatedHeader({ title }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after a delay
    }, 100); // 500ms delay for smooth animation start
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden transition-all duration-500">
        <img
          src="https://img.freepik.com/free-photo/eye-shadows-with-powder-brushes-table_23-2148046968.jpg?semt=ais_hybrid"
          alt="Header Background"
          className="object-cover w-full h-full absolute inset-0"
          style={{
            objectFit: "cover", // Ensure the image fills the header area without stretching
            objectPosition: "center", // Keep the image centered
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1
          className={`text-5xl md:text-6xl font-bold text-white z-10 transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          {title}
        </h1>
      </header>
    </>
  );
}

export default AnimatedHeader;
