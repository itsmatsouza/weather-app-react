import React from "react";
import Logo from "/home/itsmatsouza/curso/weather-app-react/src/components/imgs/4.png"

function Footer() {
  return (
    <div className="flex flex-col w-auto text-[#999] justify-center items-center">
      <p>
        Developed by: <span className="font-bold">Mateus Souza</span>
      </p>
      <img src={Logo} alt='' className="w-[40px]"/>
    </div>
  );
}

export default Footer;
