import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo/box1.png";
import { toast } from "react-toastify";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    toast("Logged out Successfully", {
      toastId: "logout",
      position: "top-center",
    });
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className=" bg-gray-300 text-xl border-b-4 border-zinc-500 border-opacity-50">
      <div className=" flex justify-between align-middle mx-20 max-sm:hidden ">
        <Link to="/" className="ml-20">
          <img
            src={logo}
            alt="logo"
            className=" w-44 bg-transparent transition-all duration-500 hover:animate-pulse"
          />
        </Link>
        <ul className="flex mr-20 gap-5 my-auto text-green-800 opacity-90 ">
          {user ? (
            <li className="text-left flex flex-col">
              <div>
                <h1>Welcome {user.firstName}</h1>
              </div>
              <button onClick={onLogout}>
                <div className="flex gap-1 align-middle ml-10 hover:opacity-80">
                  <FaSignOutAlt className="mt-1" />
                  Logout
                </div>
              </button>
            </li>
          ) : (
            <>
              <li className=" hover:opacity-70">
                <Link to="/login">
                  <FaSignInAlt />
                  Login
                </Link>
              </li>
              <li className="hover:opacity-70">
                <Link to="/register">
                  <FaUser />
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
