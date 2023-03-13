import React from "react";
import logo from "../img/index.png";

function Footer() {
  return (
    <>
      <footer className="text-2xl pb-10 text-[#3c8eb8] bg-gradient-to-l animate-text from-[#0D3c4f] to-[#517183] rounded-sm border-t-2 border-t-[#2b6fa7]">
        <div className="w-full flex justify-center"></div>
        <div className="flex justify-between align-middle mx-36 max-sm:mx-0 max-md:mx-0 mt-10">
          <div className="flex flex-col text-center ml-20 ">
            <img src={logo} alt="logo" className="w-20 m-auto" />
            <p>
              All Rights Reserved for <br />
              <span className=" font-bold">Team 12</span>
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 mt-10 mr-20 max-sm:mr-10 max-sm:ml-6">
            <h3>Support:</h3>
            <a href="mailto:ehgezly@qualityservice.com">
              ehgezly@qualityservice.com
            </a>
            <a href="mailto:team-12@qualityservice.com">
              team-12@qualityservice.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
