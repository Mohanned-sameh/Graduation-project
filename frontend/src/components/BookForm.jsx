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
    if (formData) {
      navigate("/book/details");
      document.location.reload();
    }
  };
  let min = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="border-2 flex w-[50%] mx-auto p-6 rounded-2xl shadow-2xl border-[#034275] shadow-[#3c8eb8]">
        <form
          className=" flex flex-col mx-auto gap-10 text-xl align-middle justify-center text-center"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col text-left">
            <label htmlFor="time">Date</label>
            <input
              type="date"
              name="orderDate"
              min={min}
              max={"2024-12-31"}
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
              value={people || 1}
              className="outline-none - transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="border-2 p-3 hover:p-5 rounded-3xl border-[#034275] border-opacity-60 hover:border-opacity-100 transition-all duration-500 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BookForm;
