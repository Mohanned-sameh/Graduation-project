import background from "../img/otherImages/original.jpg";
import IMAGES from "../images.js";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <section
        className="w-full mb-32 flex align-middle justify-center bg-cover bg-no-repeat border-b-2 border-green-400 shadow-2xl shadow-orange-500"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-center p-2 py-36 text-4xl bg-gradient-to-l animate-text from-green-500 to-orange-600 text-transparent italic bg-clip-text">
          <p>A genuine fine-dining experience awaits you</p>
          <Link to="/restaurants">
            <button
              className="border-4 border-opacity-10 text-3xl border-green-300 hover:border-green-500 mt-4 p-3 px-8 rounded-[1.3em] ease-in-out transition-all duration-500 bg-black bg-opacity-10 hover:bg-opacity-0
              "
            >
              Here
            </button>
          </Link>
        </div>
      </section>
      <section className="flex justify-center mx-4 mb-40 py-10 shadow-orange-500 max-sm:shadow-3xl shadow-2xl hover:py-12 max-sm:flex max-sm:flex-wrap max-md:justify-center max-md:gap-10 max-md:flex-wrap max-sm:justify-center max-sm:gap-5 transition-all duration-500  border-y-orange-500 border-2 rounded-full p-4">
        {IMAGES &&
          IMAGES.map((item) => (
            <div key={item.id} className="lg:m-4">
              <img
                src={item.image}
                alt="logo"
                className="aspect-square h-28 max-sm:h-12 border-2 border-green-400 hover:border-4 max-sm:mr-5 rounded-full hover:h-32 max-md:h-16 mr-4 max-md:mr-4 max-md:hover:h-20 max-sm:hover:h-12 ease-in-out transition-all duration-500"
              />
            </div>
          ))}
      </section>
    </>
  );
}

export default Homepage;
