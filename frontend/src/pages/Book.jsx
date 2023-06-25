import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BookForm from "../components/BookForm";

function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { isError, message } = useSelector((state) => state.book);
  useEffect(() => {
    if (isError) {
      toast.error(message, { toastId: "error", position: "top-center" });
    }
    if (!user) {
      navigate("/login");
    }
  }, [navigate, isError, message, user]);

  return (
    <div className="w-full justify-center text-center align-middle flex-col my-20">
      <BookForm id={id} />
    </div>
  );
}

export default Book;
