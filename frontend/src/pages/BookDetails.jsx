import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBook, reset } from "../features/book/bookSlice";
import Spinner from "../components/Spinner";
import BookItem from "../components/BookItem";
import { toast } from "react-toastify";

function BookDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { book, isLoading } = useSelector((state) => state.book);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        await dispatch(getBook());
      };
      toast.dismiss("noReservationFound");

      fetchData();
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, user]);

  useEffect(() => {
    if (!isLoading && (!book || book.length === 0)) {
      toast.error("No reservation found", {
        toastId: "noReservationFound",
        position: "top-center",
      });
      navigate("/restaurants");
    }
  }, [book, isLoading, navigate]);

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
