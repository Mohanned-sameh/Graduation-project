import React from "react";
import logo from "../img/logo/box.png";

function Footer() {
  return (
    <>
      <footer className="bg-neutral-100 border border-t-8 border-yellow-200">
        <div className="flex justify-between align-middle py-10 mx-auto max-w-4xl">
          <div className="flex flex-col align-middle">
            <img src={logo} alt="" width="200px" />
            All Rights Reserved for <span className=" font-bold">Team 12</span>
          </div>
          <div className="flex flex-col text-left mt-20">
            <h3>Support:</h3>
            <a href="mailto:Your-Email@example.com">Your Email Here</a>
            <a href="tel:+20Phone">Your Phone Here</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
