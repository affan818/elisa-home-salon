import data from "../../../servicesData.json";
import { Link } from "react-router-dom";
function Card() {
  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          className="relative h-[400px] w-[300px] rounded-md group cursor-pointer"
        >
          <Link to={`/${card.page}`}>
            <img
              src={card.img}
              alt={card.alt}
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#36454F] to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-5xl font-semibold text-white">{card.name}</h1>
              <p className="mt-2 text-sm text-[#FFF5E1]"></p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-[#FF3D3D] hover:bg-[#921717] rounded-lg px-4 py-2">
                View services →
              </button>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Card;
