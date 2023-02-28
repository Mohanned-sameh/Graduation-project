import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message, {
        toastId: "error",
        position: "top-center",
      });
    }
    if (isSuccess || user) {
      toast(`Welcome ${user.firstName}`, {
        toastId: "success",
        position: "top-center",
      });
      navigate("/");
      console.log(user);
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="flex mb-20 mt-10 border-4 max-sm:w-full max-md:w-full max-md:m-0 max-sm:m-0 border-green-400 border-opacity-40 rounded-3xl flex-col text-center mx-52 pb-20">
        <div className="flex flex-col text-2xl mt-10">
          <h1 className="font-bold flex justify-center gap-2">Login</h1>
          <p className="italic">start finding your favourite food</p>
        </div>
        <form
          className=" flex flex-col py-10 mx-auto gap-10 text-xl text-green-800"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col text-left">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              className="outline-none transition-all duration-500 rounded-full p-2 my-1 focus:p-4 focus:w-full outline-2 outline-slate-500 outline-opacity-25"
              onChange={onChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className=" hover:w-40 border-4 border-green-400 border-opacity-35 w-32 py-2 transition-all duration-500 hover:p-3 rounded-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Login;
