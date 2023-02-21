import React from "react";
import logo from "../img/logo/box.png";

function Footer() {
  return (
    <>
      <hr className=" text-black bg-black h-1 opacity-60 mb-20 mt-40" />
      <footer className="bg-slate-50 text-2xl pb-10">
        <div className="flex justify-between align-middle my-10">
          <div className="flex flex-col text-center ml-20">
            <img src={logo} alt="logo" className="w-48 m-auto" />
            <p>
              All Rights Reserved for <br />
              <span className=" font-bold">Team 12</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-20 mr-20">
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
