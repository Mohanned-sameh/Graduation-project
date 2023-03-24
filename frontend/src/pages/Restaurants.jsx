import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RestaurantItem from "../components/RestaurantItem";
import { toast } from "react-toastify";
import {
  getRestaurants,
  reset,
} from "../features/restaurants/restaurantsSlice";
import { Link } from "react-router-dom";

function Restaurants() {
  const dispatch = useDispatch();
  const { restaurants, isLoading, isError, message } = useSelector(
    (state) => state.restaurants
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getRestaurants());
    dispatch(reset);
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className=" flex w-full justify-center">
        <div className="flex w-[80%] py-10 px-16 flex-col">
          <div className="text-2xl font-semibold underline underline-offset-auto bg-opacity-60 shadow-xl text-[#3c8eb8]  opacity-90 border-[#034275]  shadow-[#3c8eb8] w-full mb-10 border-4 rounded-full p-8 border-x-0 ">
            <h2 className="ml-10">Hot deals</h2>
          </div>
          {restaurants.length > 0 ? (
            <div className="w-full border-2 rounded-3xl border-[#034275]  shadow-[#3c8eb8]  mb-20 shadow-xl max-sm:py-10 max-sm:px-2 max-sm:mx-0  justify-start gap-5 max-sm:my-10 flex py-10 flex-wrap ">
              {restaurants.map((restaurant) => {
                return restaurant.discount ? (
                  <Link
                    to={`/restaurantsDetails/${restaurant._id}`}
                    key={restaurant._id}
                  >
                    <RestaurantItem restaurant={restaurant} />
                  </Link>
                ) : (
                  ""
                );
              })}
            </div>
          ) : (
            <></>
          )}
          <div className="text-2xl font-semibold underline underline-offset-auto bg-opacity-60 shadow-xl text-[#3c8eb8]  opacity-90 border-[#034275]  shadow-[#3c8eb8] w-full mb-20 border-4 rounded-full p-8 border-x-0">
            <h2 className="ml-10">All Restaurants</h2>
          </div>
          <div className="flex flex-col jusify-start mb-10 px-5 gap-10  max-sm:p-2">
            <div className="w-full border-2 rounded-3xl border-[#034275]  shadow-[#3c8eb8] shadow-xl max-sm:py-10 justify-start gap-5 max-sm:my-10 flex py-10 flex-wrap ">
              {restaurants.length > 0 ? (
                <>
                  {restaurants.map((restaurant) => {
                    return (
                      <Link
                        to={`/restaurantsDetails/${restaurant._id}`}
                        key={restaurant._id}
                      >
                        <RestaurantItem restaurant={restaurant} />
                      </Link>
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
