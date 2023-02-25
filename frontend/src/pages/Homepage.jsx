import background from "../img/otherImages/original.jpg";
import IMAGES from "../images.js";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <section
        className="bg-gray-300 w-full py-[15rem] mb-40 flex align-middle justify-center bg-cover bg-no-repeat overflow-auto"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-center underline p-2 text-4xl bg-gradient-to-r animate-text from-green-500 to-black text-transparent italic bg-clip-text">
          <p>
            A genuine fine-dining experience awaits <br />
            <button
              className="border-4 border-opacity-10 border-green-600 hover:border-green-500 mt-4 p-5 rounded-[1.3em] ease-in-out transition-all duration-500
            "
            >
              <Link to="/restaurants">You Here</Link>
            </button>
          </p>
        </div>
      </section>
      <section className="flex justify-center mx-4 mb-40 py-16 border-t-zinc-600 border-b-zinc-600 border-4 border-opacity-50 rounded-full p-4">
        {IMAGES &&
          IMAGES.map((item) => (
            <div key={item.id} className="lg:m-4">
              <img
                src={item.image}
                alt="logo"
                className="aspect-square h-28 rounded-full hover:h-32 ease-in-out transition-all duration-500"
              />
            </div>
          ))}
      </section>
    </>
  );
}

export default Homepage;
