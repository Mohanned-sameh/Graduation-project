import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBook, reset } from "../features/book/bookSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
// import { getRestaurantDetails } from "../features/restaurants/restaurantsSlice";
import BookItem from "../components/BookItem";
function BookDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { book, isError, isLoading, message } = useSelector(
    (state) => state.book
  );
  // const { restaurants } = useSelector((state) => state.restaurants);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message, { toastId: message });
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getBook());
    // dispatch(getRestaurantDetails(book[0].restaurant));
    dispatch(reset());
  }, [dispatch, message, isError, navigate, user]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {book.length > 0 ? (
        <div>
          {book.map((book) => (
            <BookItem key={book._id} book={book} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BookDetails;
