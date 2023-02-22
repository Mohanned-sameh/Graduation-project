import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo/box1.png";
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
    <header className=" bg-blue-50 text-xl">
      <div className=" flex justify-between align-middle">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[200px] ml-20 bg-transparent"
            />
          </Link>
        </div>
        <ul className="flex mr-20 gap-5 my-auto">
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
      </div>
    </header>
  );
}

export default Header;
