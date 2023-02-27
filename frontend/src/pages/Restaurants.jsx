import { FaSearch } from "react-icons/fa";
function Restaurants() {
  return (
    <>
      <div className=" flex w-full bg-slate-400 justify-center">
        <div className="flex w-[80%] py-10 px-16 flex-col">
          <div className="text-2xl bg-opacity-60  w-full mb-20 border-4 rounded-full p-8 border-x-0 border-green-600">
            <h2>All Restaurants</h2>
          </div>
          <div className="flex flex-col jusify-start mb-20 px-5 gap-10  ">
            <div className="flex gap-1 outline-none transition-all duration-500  justify-center w-full bg-white p-2 my-1 hover:p-2 rounded-full outline-opacity-25 outline-slate-500 outline-2">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full outline-none"
              />
              <button type="submit" className="mx-2">
                <FaSearch size="1.5em" />
              </button>
            </div>
            <div className="w-full border-4 border-black justify-around flex gap-5 py-10 flex-wrap">
              <div className="text-center">
                <div className="border-4 border-blue-900 p-5">
                  <img
                    src="./restaurantsImages/esca.jpeg"
                    alt="esca"
                    className="rounded-full w-40"
                  />
                </div>
                <div className="text-xl text-left px-5 py-2">
                  <h1>Title:</h1>
                  <h5>Rating:</h5>
                  <h4>Types:</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="border-4 border-blue-900 p-5">
                  <img
                    src="./restaurantsImages/esca.jpeg"
                    alt="esca"
                    className="rounded-full w-40"
                  />
                </div>
                <div className="text-xl text-left px-5 py-2">
                  <h1>Title:</h1>
                  <h5>Rating:</h5>
                  <h4>Types:</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="border-4 border-blue-900 p-5">
                  <img
                    src="./restaurantsImages/esca.jpeg"
                    alt="esca"
                    className="rounded-full w-40"
                  />
                </div>
                <div className="text-xl text-left px-5 py-2">
                  <h1>Title:</h1>
                  <h5>Rating:</h5>
                  <h4>Types:</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
