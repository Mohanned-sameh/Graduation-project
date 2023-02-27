// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../components/Spinner";
// import {
//   getRestaurantDetails,
//   reset,
// } from "../features/restaurants/restaurantsSlice";
import { toast } from "react-toastify";
function RestaurantDetails() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);
  // const { restaurantDetails, isLoading, isError, message } = useSelector(
  //   (state) => state.restaurants
  // );

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message, {
  //       toastId: "error",
  //     });
  //   }
  //   if (!user) {
  //     toast.warn("Please Login", {
  //       toastId: "warn",
  //     });
  //     navigate("/login");
  //   }
  //   dispatch(getRestaurantDetails());

  //   return () => {
  //     dispatch(reset);
  //   };
  // }, [user, navigate, dispatch, message, isError]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <>
      <div>RestaurantDetails</div>
    </>
  );
}

export default RestaurantDetails;
