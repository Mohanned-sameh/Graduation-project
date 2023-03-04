import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RestaurantItem from "../components/RestaurantItem";
import { toast } from "react-toastify";
// import restaurantService from "../features/restaurants/restaurantsService";
import {
  getRestaurants,
  reset,
} from "../features/restaurants/restaurantsSlice";
import { Link } from "react-router-dom";

function Restaurants() {
  // const [restaurants, setRestaurants] = useState([]);
  const dispatch = useDispatch();
  const { restaurants, isLoading, isError, message } = useSelector(
    (state) => state.restaurants
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // restaurantService.getRestaurants().then((data) => setRestaurants(data));
    dispatch(getRestaurants());
    return () => {
      dispatch(reset);
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className=" flex w-full justify-center">
        <div className="flex w-[80%] py-10 px-16 flex-col">
          <div className="text-2xl font-semibold underline underline-offset-auto bg-opacity-60 shadow-xl text-green-800 opacity-90 shadow-orange-300 w-full mb-10 border-4 rounded-full p-8 border-x-0 border-orange-600">
            <h2>Hot deals</h2>
          </div>
          {restaurants.length > 0 ? (
            <div className="w-full border-2 rounded-3xl border-orange-500  mb-20 shadow-xl max-sm:py-10 max-sm:px-2 max-sm:mx-0 shadow-orange-400 justify-start gap-5 max-sm:my-10 flex py-10 flex-wrap ">
              {restaurants.map((restaurant) => {
                return restaurant.discount ? (
                  <Link to={`/restaurantsDetails/${restaurant._id}`}>
                    <RestaurantItem
                      restaurant={restaurant}
                      key={restaurant._id}
                    />
                  </Link>
                ) : (
                  <></>
                );
              })}
            </div>
          ) : (
            <></>
          )}
          <div className="text-2xl font-semibold underline underline-offset-auto bg-opacity-60 shadow-xl text-green-800 opacity-90 shadow-orange-300 w-full mb-20 border-4 rounded-full p-8 border-x-0 border-orange-600">
            <h2>All Restaurants</h2>
          </div>
          <div className="flex flex-col jusify-start mb-10 px-5 gap-10  max-sm:p-2">
            {/* <div className="flex gap-1 outline-none transition-all duration-500  justify-center w-full p-2 my-1 hover:py-3 rounded-full outline-opacity-25 outline-slate-500 outline-2">
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
            </div> */}
            <div className="w-full border-2 rounded-3xl border-orange-500 shadow-xl max-sm:py-10 shadow-orange-400 justify-start gap-5 max-sm:my-10 flex py-10 flex-wrap ">
              {restaurants.length > 0 ? (
                <>
                  {restaurants.map((restaurant) => {
                    return !restaurant.discount ? (
                      <Link to={`/restaurantsDetails/${restaurant._id}`}>
                        <RestaurantItem
                          restaurant={restaurant}
                          key={restaurant._id}
                        />
                      </Link>
                    ) : (
                      <></>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
