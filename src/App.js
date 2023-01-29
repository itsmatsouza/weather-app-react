import React, { useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import fetchData from "./services/api";
import initialData from "./services/helpers/initialData";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex w-full h-screen justify-center flex-col items-center">
      <div className="flex justify-center items-center flex-col p-4 sm:w-">
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            className="p-3 text-[#333] outline-none rounded-lg bg-[#fffff4] opacity-70 w-full flex-1"
            type="text"
            placeholder="City"
            value={city}
            onChange={({ target: { value } }) => setCity(value)}
          />

          <button
            type="submit"
            className="p-3 ml-3 rounded-lg hover:text-[#999] duration-200"
          >
            Search
          </button>
        </form>

        <Toggle />

        <Card data={data} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
