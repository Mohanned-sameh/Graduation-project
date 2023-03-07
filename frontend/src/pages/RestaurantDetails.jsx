import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import {
  getRestaurantDetails,
  reset,
} from "../features/restaurants/restaurantsSlice";

function RestaurantDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { restaurants, isLoading, isError, message } = useSelector(
    (state) => state.restaurants
  );
  const { logo, title, description, opens, closes, type, locations } =
    restaurants;
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getRestaurantDetails(id));
    return () => {
      reset();
    };
  }, [dispatch, id, user, isError, message, navigate]);
  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="m-20 text-green-700 text-center">
      <div className="border-2 border-orange-500 rounded-3xl p-10 shadow-2xl shadow-green-500">
        <div className="flex justify-center align-middle">
          <img
            src={logo}
            alt={title}
            className="h-52 rounded-full border-green-500 border-2 mb-10"
          />
        </div>
        <div className="w-full flex justify-center align-middle mb-10 border-2 p-16 rounded-3xl">
          <div className="flex gap-3 flex-col text-xl font-normal">
            <pre className="text-2xl whitespace-pre-wrap leading-relaxed font-black text-left">
              {description}
            </pre>
            <div className="flex flex-col text-left mx-auto align-middle justify-center gap-4 my-5">
              <h4>Address: {locations}</h4>
              <h4>Type: {type}</h4>
              <h4>
                Work Hours: {opens} - {closes}
              </h4>
            </div>
            <div className="border-t-2 border-green-500 mt-5">
              <div className="mt-10 flex align-middle justify-center gap-5  ">
                <Link to={`/book/${id}`}>
                  <button className="border-2 p-2 hover:p-4 rounded-3xl border-green-500 border-opacity-60 hover:border-opacity-100 transition-all duration-500 ">
                    Book now
                  </button>
                </Link>
                <button className="border-2 p-2 hover:p-4 rounded-3xl border-green-500 border-opacity-60 hover:border-opacity-100 transition-all duration-500 ">
                  Check the menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
