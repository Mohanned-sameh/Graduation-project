import { Link } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import logo from "../img/index.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <header className="text-xl border-b-2 rounded-sm bg-gradient-to-r animate-text from-[#0D3c4f] to-[#517183] border-[#3c8eb8] flex justify-between px-20 py-5 text-[#3c8eb8]">
      <Link to="/" className="ml-20 max-sm:ml-10 max-md:ml-0">
        <img
          src={logo}
          alt="logo"
          className="w-20 transition-all duration-500 hover:animate-pulse"
        />
      </Link>
      <Profile onLogout={onLogout} user={user} />
    </header>
  );
}

export default Header;
