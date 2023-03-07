import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo/box-2.png";
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
    <header
      className="text-xl border-b-2 rounded-sm border-black"
      style={{ backgroundColor: "#0D3c4f" }}
      // style={{ backgroundColor: "wheat" }}
    >
      <div className=" flex justify-between max-sm:mx-0 lg:mx-20">
        <Link to="/" className="ml-20 max-sm:ml-10 max-md:ml-0">
          <img
            src={logo}
            alt="logo"
            className=" h-32 transition-all duration-500 hover:animate-pulse"
          />
        </Link>
        <ul className="mr-20 gap-5 my-auto text-green-700 max-md:mr-10">
          {user ? (
            <li className="text-left flex flex-col max-sm:text-center">
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
            <div className="flex gap-5 mt-2">
              <li className=" hover:opacity-70">
                <Link to="/login">
                  <FaSignInAlt className="m-auto" />
                  Login
                </Link>
              </li>
              <li className="hover:opacity-70">
                <Link to="/register">
                  <FaUser className="m-auto" />
                  Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
