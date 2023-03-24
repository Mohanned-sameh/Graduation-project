import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRestaurantDetails,
  reset,
} from "../features/restaurants/restaurantsSlice";
import { deleteBook } from "../features/book/bookSlice";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function BookItem({ book, user }) {
  const { restaurants } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, locations, opens, closes } = restaurants;
  useEffect(() => {
    if (book) {
      dispatch(getRestaurantDetails(book.restaurant));
    }
    dispatch(reset());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  const onClick = () => {
    dispatch(deleteBook(_id));
    navigate("/restaurants");
  };

  const reservationData = {
    restaurantName: restaurants.title,
    name: user.firstName + " " + user.lastName,
    date: book.orderDate,
    time: book.orderTime,
    guests: book.people,
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Restaurant name: ${reservationData.restaurantName}`, 10, 20);
    doc.text(`Reservation for ${reservationData.name}`, 10, 30);
    doc.text(`Date: ${reservationData.date}`, 10, 40);
    doc.text(`Time: ${reservationData.time}`, 10, 50);
    doc.text(`Guests: ${reservationData.guests}`, 10, 60);
    doc.save("reservation.pdf");
  };

  const { orderTime, orderDate, people, _id } = book;
  let hours = parseInt(orderTime) % 12;
  return (
    <div className="border-2 w-[50%] mx-auto p-20 rounded-2xl shadow-2xl border-[#034275] shadow-[#3c8eb8]">
      <div className="flex flex-wrap justify-center align-middle gap-7 text-xl">
        <h1>Name: {user.firstName + " " + user.lastName}</h1>
        <hr className="w-full h-1 bg-[#034275]" />
        <div className="flex flex-wrap gap-5 justify-center my-5">
          <h1>Reservation date: {orderDate}</h1>
          <h1>Reservation time: {hours >= 12 ? hours + "AM" : hours + "PM"}</h1>
          <h1>Guests: {people}</h1>
        </div>
        <hr className="w-full h-1 bg-[#034275]" />
        <div className=" flex gap-5 my-5 justify-center flex-wrap ">
          <h1>Title: {title}</h1>
          <h1>Location: {locations}</h1>
          <h1>Opens: {opens}</h1>
          <h1>Closes: {closes}</h1>
        </div>
        <div className="border-2 p-3 hover:p-5 rounded-3xl border-[#034275] border-opacity-60 hover:border-opacity-100 transition-all duration-500 ">
          <button onClick={onClick}>Cancel</button>
        </div>
        <div className="border-2 p-3 hover:p-5 rounded-3xl border-[#034275] border-opacity-60 hover:border-opacity-100 transition-all duration-500 ">
          <button
            onClick={() => {
              generatePDF();
            }}
          >
            Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
