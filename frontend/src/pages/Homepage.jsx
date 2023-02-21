import React from "react";
import backGround from "../img/otherImages/blue2.png";

function Homepage() {
  return (
    <>
      <section className="mx-auto">
        <div className="pb-10">
          <img
            src={backGround}
            alt="background"
            width="100%"
            className=" bg-cover opacity-80"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto my-6"></section>
    </>
  );
}

export default Homepage;
