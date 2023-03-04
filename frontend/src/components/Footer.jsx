import React from "react";
import logo from "../img/logo/box-2.png";

function Footer() {
  return (
    <>
      <footer className="text-2xl pb-10 text-green-700 rounded-sm border-t-2 border-green-400">
        <div className="w-full flex justify-center"></div>
        <div className="flex justify-between align-middle mx-36 max-sm:mx-0 max-md:mx-0 mt-10">
          <div className="flex flex-col text-center ml-20 ">
            <img src={logo} alt="logo" className="w-48 m-auto" />
            <p>
              All Rights Reserved for <br />
              <span className=" font-bold">Team 12</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-10 mr-20 max-sm:mr-10 max-sm:ml-6">
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
