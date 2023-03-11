import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reset, getBook } from "../features/book/bookSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
function BookDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message, book } = useSelector(
    (state) => state.book
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, { toastId: message });
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getBook());

    return () => {
      dispatch(reset());
    };
  });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div>{book.map((book) => console.log(book))}</div>
    </div>
  );
}

export default BookDetails;
