import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { createBook, reset } from "../features/book/bookSlice";
import { toast } from "react-toastify";
function Book() {
  const { User } = useSelector((state) => state.auth);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    orderTime: "",
    people: "",
  });

  const { orderTime, people } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, message } = useSelector((state) => state.book);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!User) {
      navigate("/login");
    }
    dispatch(reset());
  }, [User, navigate, message, isError, dispatch]);

  const onChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!orderTime || !people) {
      toast.error("All fields must be filled");
    }
    const bookData = {
      user: User._id,
      restaurant: id,
      orderTime,
      people,
    };
    dispatch(createBook(bookData));
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div>
        <form>
          <label htmlFor="orderTime">Place the date</label>
          <input type="date" name="" id="" />
        </form>
      </div>
    </div>
  );
}

export default Book;
