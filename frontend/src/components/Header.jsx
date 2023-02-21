import { FaSign, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo/box.png";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className="flex bg-neutral-100 w-[100%] justify-between items-center p-6 border border-b-8 border-yellow-200">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[200px]" />
        </Link>
      </div>
      <ul className="flex gap-5 text-xl">
        {user ? (
          <li>
            <button onClick={onLogout}>
              <FaSignOutAlt />
              Logout
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
    </header>
  );
}

export default Header;
