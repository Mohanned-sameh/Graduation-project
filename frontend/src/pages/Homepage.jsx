import backGround from "../img/otherImages/blue2.png";
import IMAGES from "../images.js";
import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
function Homepage() {
  return (
    <>
      <section>
        <div className="mb-40">
          <img
            className="opacity-80 w-full"
            src={backGround}
            alt="background"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center text-center items-center text-4xl my-40">
        <div>
          <h3>About Us</h3>
          <p></p>
        </div>
        <Link to="/restaurants">
          <h3 className=" transition-all duration-500 ease-in-out hover:text-green-400 border-4 hover:text-3xl text-xl rounded-full bg-cyan-100 p-10 text-[24px] text-green-600 ">
            Find what suits you
            <BiFoodMenu className="m-auto" />
          </h3>
        </Link>
      </section>
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
