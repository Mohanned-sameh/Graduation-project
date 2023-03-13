import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBook, reset } from "../features/book/bookSlice";
function BookForm({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    orderTime: "",
    orderDate: "",
    people: 0,
  });
  const { orderTime, orderDate, people } = formData;
  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      orderTime,
      orderDate,
      people,
      restaurant: id,
    };
    dispatch(createBook(formData));
    setFormdata(formData);
    dispatch(reset);
    navigate("/book/details");
  };
  return (
    <>
      <form
        className=" flex flex-col mx-auto gap-10 text-xl text-green-800 align-middle justify-center text-center"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col text-left">
          <label htmlFor="time">Date</label>
          <input
            type="date"
            name="orderDate"
            id="date"
            value={orderDate}
            placeholder="Reservation Date"
            className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col text-left">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="orderTime"
            id="time"
            value={orderTime}
            placeholder="Reservation Time"
            className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="people">Number of people</label>
          <input
            type="number"
            min="1"
            name="people"
            id="people"
            value={people}
            placeholder="Number of people"
            className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
            onChange={onChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className=" hover:px-7 border-4 border-[#034275] border-opacity-35 p-5 rounded-[35%] transition-all duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default BookForm;
