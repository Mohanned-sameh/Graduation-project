import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { getBook, reset } from "../features/book/bookSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
function Profile({ onLogout, user }) {
  const dispatch = useDispatch();
  const { book, isError, isLoading, message } = useSelector(
    (state) => state.book
  );
  const [visibile, setVisible] = useState(false);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user) {
      dispatch(getBook());
    }
  }, [dispatch, isError, message, user, book.length]);

  const mouseLeave = () => {
    setVisible(false);
  };
  const mouseEnter = () => {
    setVisible(!visibile);
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="my-auto text-center z-50" onMouseLeave={mouseLeave}>
      <div className="text-[#3c8eb8] m-auto mr-7">
        <CgProfile size="40px" name="profile" onMouseEnter={mouseEnter} />
      </div>

      {visibile ? (
        <>
          {!user ? (
            <ul className=" absolute bg-[#0D3c4f] p-5 right-[2%] rounded-2xl ">
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 transition-all">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 transition-all">
                <Link to="/restaurants">Restaurants</Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 transition-all">
                <Link to="/login">
                  <FaSignInAlt className=" mx-auto" />
                  Login
                </Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 transition-all">
                <Link to="/register">
                  <FaUser className=" mx-auto" />
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <ul className=" absolute bg-[#0D3c4f] p-5 right-[2%] rounded-2xl">
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 duration-500 transition-all">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 duration-500 transition-all">
                <Link to="/restaurants">Restaurants</Link>
              </li>
              {book.length > 0 ? (
                <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 duration-500 transition-all">
                  <Link to="/book/details/">Check your reservations</Link>
                </li>
              ) : (
                <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 duration-500 transition-all">
                  No Reservations
                </li>
              )}
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70 hover:-translate-y-1 duration-500 transition-all">
                <button onClick={onLogout}>
                  <FaSignOutAlt className=" mx-auto" />
                  Logout
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile;
