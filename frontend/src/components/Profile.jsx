import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileBook from "./ProfileBook";
function Profile({ onLogout, user }) {
  const [visibile, setVisible] = useState(false);

  const mouseLeave = () => {
    setVisible(false);
  };
  const mouseEnter = () => {
    setVisible(!visibile);
  };
  return (
    <div
      className="my-auto text-center"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="text-[#3c8eb8] m-auto mr-7">
        <CgProfile size="40px" name="profile" />
      </div>

      {visibile ? (
        <>
          {!user ? (
            <ul className=" absolute bg-[#0D3c4f] p-5 right-[2%] rounded-2xl ">
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
                <Link to="/restaurants">Restaurants</Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
                <Link to="/login">
                  <FaSignInAlt className=" mx-auto" />
                  Login
                </Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
                <Link to="/register">
                  <FaUser className=" mx-auto" />
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <ul className=" absolute bg-[#0D3c4f] p-5 right-[2%] rounded-2xl">
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
                <Link to="/restaurants">Restaurants</Link>
              </li>
              <ProfileBook user={user} />
              <li className="border-b-2 border-[#034275] p-2 my-2 hover:opacity-70">
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
