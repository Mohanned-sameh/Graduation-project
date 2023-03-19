import { getBook, reset } from "../features/book/bookSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
function ProfileBook({ user }) {
  const dispatch = useDispatch();
  const { book, isError, isLoading, message } = useSelector(
    (state) => state.book
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getBook());
    dispatch(reset());
  }, [dispatch, isError, message]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {book.length > 0 ? (
        <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
          <Link to="/book/details/">Check your reservations</Link>
        </li>
      ) : (
        <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
          No Reservations
        </li>
      )}
    </>
  );
}

export default ProfileBook;
