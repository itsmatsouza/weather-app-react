import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="p-6 mt-4 rounded-lg text-[#333] bg-[#fffff4] opacity-70 shadow-xl min-w-[100%]">
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold">{location.name}</span>
        <span className="text-[#888]">{`${location.region}, ${location.country}`}</span>
      </div>

      <div className="flex justify-center font-bold mt-2">
        <span className="text-8xl">{localStorage.getItem("type") === '1' ? current.temp_f : current.temp_c}</span>
        <span className="text-2xl mt-3">{localStorage.getItem("type") === '1' ? '°F' : 'C°'}</span>
      </div>

      <div className="flex flex-col items-center text-center mt-3 justify-center">
        <img src={current.condition.icon} alt="weather-icon" />
        <span>{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
