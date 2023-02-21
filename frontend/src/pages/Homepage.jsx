import React from "react";
import backGround from "../img/otherImages/blue2.png";
import IMAGES from "../images.js";

function Homepage() {
  return (
    <>
      <section>
        <div>
          <img
            className="opacity-80 w-full mt-20 "
            src={backGround}
            alt="background"
          />
        </div>
      </section>
      <hr className=" text-black bg-black h-1 opacity-60 mb-20 mt-40" />
      <section className="flex justify-center my-40 mx-2">
        {IMAGES &&
          IMAGES.map((item) => (
            <div key={item.id} className="lg:m-4">
              <img
                src={item.image}
                alt="logo"
                className="aspect-square w-40 rounded-full hover:w-48 ease-in-out transition-all duration-500"
              />
            </div>
          ))}
      </section>
    </>
  );
}

export default Homepage;
