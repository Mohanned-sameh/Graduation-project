import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  });

  const { firstName, lastName, email, password, passwordConfirm, phoneNumber } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message, {
        toastId: "error",
      });
    }
    if (isSuccess || user) {
      toast(`Welcome ${user.firstName}`, {
        toastId: "success",
        position: "top-center",
      });
      navigate("/");
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match", {
        toastId: "error",
        position: "top-center",
      });
    } else {
      const userData = {
        firstName,
        lastName,
        password,
        email,
        phoneNumber,
      };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="flex mb-20 mt-10 border-4 max-sm:m-0 max-md:m-0 text-[#3c8eb8] border-[#034275] border-opacity-40 rounded-3xl flex-col text-center mx-52 pb-20">
        <div className="flex flex-col text-2xl mt-10">
          <h1 className="font-bold flex justify-center gap-2">
            <FaUser />
            Register
          </h1>
          <p>Please create a new account</p>
        </div>
        <form
          className=" flex flex-col py-10 mx-auto gap-10 text-xl text-green-800"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col text-left">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder="First name"
              onChange={onChange}
              required
              className="outline-none transition-all duration-500 rounded-full my-1 p-2 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              required
              placeholder="Last name"
              onChange={onChange}
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              placeholder="Email"
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              required
              value={phoneNumber}
              placeholder="ex:+201026371183"
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              id="password"
              value={password}
              placeholder="Password"
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              required
              value={passwordConfirm}
              placeholder="Confirm password"
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="border-2 p-3 hover:p-5 rounded-3xl border-[#034275] border-opacity-60 hover:border-opacity-100 transition-all duration-500 "
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
