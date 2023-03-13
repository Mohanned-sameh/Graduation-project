import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRestaurantDetails,
  reset,
} from "../features/restaurants/restaurantsSlice";

function BookItem({ book, user }) {
  const { restaurants } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const { title, locations, opens, closes } = restaurants;
  useEffect(() => {
    dispatch(getRestaurantDetails(book.restaurant));
    dispatch(reset());
    console.log(restaurants);
  }, []);

  const { orderTime, orderDate, people } = book;
  let hours = parseInt(orderTime) % 12;
  return (
    <div className="border-2 w-[50%] mx-auto p-20 rounded-2xl shadow-2xl border-[#034275] shadow-[#3c8eb8]">
      <div className="flex flex-wrap justify-center align-middle gap-7 text-xl">
        <h1>Name: {user.firstName + " " + user.lastName}</h1>
        <hr className="w-full h-1 bg-[#034275]" />
        <div className="flex flex-wrap gap-5 justify-center my-5">
          <h1>Reservation date: {orderDate}</h1>
          <h1>
            Reservation time:{" "}
            {hours >= 12 ? hours + " " + "AM" : hours + " " + "PM"}
          </h1>
          <h1>Seats: {people}</h1>
        </div>
        <hr className="w-full h-1 bg-[#034275]" />
        <div className=" flex gap-5 my-5 justify-center flex-wrap ">
          <h1>Title: {title}</h1>
          <h1>Location: {locations}</h1>
          <h1>Opens: {opens}</h1>
          <h1>Closes: {closes}</h1>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
