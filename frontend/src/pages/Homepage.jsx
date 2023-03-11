import background from "../img/otherImages/original.jpg";
import IMAGES from "../images.js";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <section
        className="w-full mb-32 flex align-middle justify-center bg-cover bg-no-repeat border-b-2 border-[#034275]  shadow-[#3c8eb8] shadow-2xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-center p-2 py-36 text-4xl bg-gradient-to-r animate-text from-[#3c8eb8] to-[#034275] text-transparent italic bg-clip-text">
          <div>
            <p>A genuine fine-dining experience awaits you</p>
            <Link to="/restaurants">
              <button
                className="border-4 border-opacity-10 text-3xl border-[#3c8eb8] hover:px-10 hover:border-[#034275] mt-4 p-3 px-8 rounded-[1.3em] ease-in-out transition-all duration-500 bg-black bg-opacity-10 hover:bg-opacity-0
              "
              >
                Here
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center mx-4 mb-40 py-10 border-y-[#034275]
shadow-[#3c8eb8] max-sm:shadow-3xl shadow-2xl max-sm:flex max-sm:flex-wrap max-md:justify-center max-md:gap-10 max-md:flex-wrap max-sm:justify-center max-sm:gap-5 transition-all duration-500  border-2 rounded-full p-4"
      >
        {IMAGES &&
          IMAGES.map((item) => (
            <div key={item.id} className="lg:m-4">
              <img
                src={item.image}
                alt="logo"
                className="aspect-square h-28 max-sm:h-12 border-2 border-[#3c8eb8]
                 hover:border-4 max-sm:mr-5 rounded-full hover:h-32 max-md:h-16 mr-4 max-md:mr-4 max-md:hover:h-20 max-sm:hover:h-12 ease-in-out transition-all duration-500"
              />
            </div>
          ))}
      </section>
    </>
  );
}

export default Homepage;
