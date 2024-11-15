import React from "react";

function Card({ title, btnText = "Visit Me" }) {
  console.log(title);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md group">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#36454F] to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-[#FFF5E1]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-[#1A237E] hover:bg-[#0d1b56] rounded-lg px-4 py-2">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
