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

  const { book, isLoading, message } = useSelector((state) => state.book);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getBook());
    dispatch(reset());
  }, [dispatch, message, navigate, user]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-full my-20">
      {book.length > 0 ? (
        <div>
          {book.map((book) => (
            <BookItem key={book._id} book={book} user={user} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BookDetails;
