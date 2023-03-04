import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="flex flex-col items-center w-full p-20 text-xl">
      <div className="flex flex-col gap-2 border-2 text-center p-20 border-orange-500 rounded-3xl shadow-2xl shadow-orange-500">
        <h1 className="text-3xl text-red-500 mb-2">
          Oops! You seem to be lost.
        </h1>
        <p>Here are some helpful links:</p>
        <div className="flex justify-evenly m-5 text-green-700">
          <Link
            to="/"
            className="underline hover:py-2 transition-all duration-500"
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className="underline hover:py-2 transition-all duration-500"
          >
            All Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
