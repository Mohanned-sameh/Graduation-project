import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import BookForm from "../components/BookForm";
function Book() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, message } = useSelector((state) => state.book);
  useEffect(() => {
    if (isError) {
      toast.error(message, { toastId: "error", position: "top-center" });
    }
    if (!user) {
      navigate("/login");
    }
  }, [navigate, dispatch, isError, message, user]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-full justify-center text-center align-middle flex-col my-20">
      <BookForm id={id} />
    </div>
  );
}

export default Book;
