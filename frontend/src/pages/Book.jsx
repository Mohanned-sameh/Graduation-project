import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { createBook, reset, getBook } from "../features/book/bookSlice";
import { toast } from "react-toastify";
import bookService from "../features/book/bookService";
function Book() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, message, book } = useSelector(
    (state) => state.book
  );
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    }
    bookService.getOrder().then((data) => console.log(data));
    // dispatch(getBook());
    dispatch(reset());
  }, [navigate, dispatch, isError, message, user, book]);

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
    // bookService.createOrder(bookData);
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex text-center">
        {book.length > 0 ? <div>You have {book.length} set</div> : ""}
        <form
          className=" flex flex-col py-10 mx-auto gap-10 text-xl text-green-800"
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
              max="10"
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
              className=" hover:w-40 border-4 border-green-400 border-opacity-35 w-32 py-2 transition-all duration-500 hover:p-3 rounded-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Book;
