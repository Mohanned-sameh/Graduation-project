import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getRestaurantDetails,
  reset,
} from "../features/restaurants/restaurantsSlice";

function BookItem({ book }) {
  const [restaurant, setRestaurant] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setRestaurant(dispatch(getRestaurantDetails(book.restaurant)));
    dispatch(reset());
    console.log(restaurant);
  }, [dispatch, restaurant, book.restaurant]);
  return <div>{book.orderTime}</div>;
}

export default BookItem;
