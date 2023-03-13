import { useEffect, useState } from "react";
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
  const [hiddenmenu, showMenu] = useState(false);

  const menuToggle = () => {
    showMenu(!hiddenmenu);
  };

  const { restaurants, isLoading, isError, message } = useSelector(
    (state) => state.restaurants
  );
  const { logo, title, description, opens, closes, type, locations, menu } =
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
      dispatch(reset());
    };
  }, [dispatch, id, user, isError, message, navigate]);
  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="m-20 text-[#3c8eb8]  text-center">
      <div className="border-2 border-[#034275]  shadow-[#3c8eb8] rounded-3xl p-10 shadow-2xl ">
        <div className="flex justify-center align-middle">
          <img
            src={logo}
            alt={title}
            className="h-52 rounded-full border-[#034275]   border-2 mb-10"
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
            <div className="border-t-2 border-[#034275]  mt-5">
              <div className="mt-10 flex align-middle justify-center gap-5  ">
                <Link to={`/book/${id}`}>
                  <button className="border-2 p-3 hover:p-5 rounded-3xl border-[#034275] border-opacity-60 hover:border-opacity-100 transition-all duration-500 ">
                    Book now
                  </button>
                </Link>
                {menu ? (
                  <button
                    onClick={menuToggle}
                    className="border-2 p-3 hover:p-5 rounded-3xl border-[#034275] border-opacity-60 hover:border-opacity-100 transition-all duration-500 "
                  >
                    Check the menu
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {hiddenmenu ? (
              <div className="border-2 border-solid border-[#034275] p-4 my-10 rounded-3xl flex">
                <iframe
                  className="flex-1"
                  src={menu}
                  id="menu"
                  height="500px"
                  title={title}
                ></iframe>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
