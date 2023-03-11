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
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    }
  }, [navigate, dispatch, isError, message, user]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-full flex align-middle justify-center">
      <div className="flex text-center align-middle flex-col my-20 border-2 px-32 py-20 rounded-3xl border-[#034275]">
        <BookForm id={id} />
      </div>
    </div>
  );
}

export default Book;
