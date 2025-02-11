import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginUser, loginUserWithGoogle, setUser } = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setError("");
    setSuccess("");

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess("User login successfully");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    loginUserWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setSuccess("User login sucessfully");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center mt-16">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="uppercase text-2xl flex items-center text-[#203F3F] font-medium">
            Login With
          </h2>
          <button
            onClick={handleGoogleLogin}
            className="px-4 md:px-8 py-1 w-full md:py-3 cursor-pointer border border-[#203F3F] hover:bg-[#203F3F] hover:text-white font-medium text-[#203F3F] transition"
          >
            Google
          </button>
          {/* <p className="bg-[#203F3F] text-center w-5 h-0.5 "></p> */}
          <p className="uppercase text-sm text-center text-[#203F3F] font-medium">OR</p>
          {/* <p className="bg-[#203F3F] text-center w-5 h-0.5 "></p> */}
          <div>
            <label>Email</label>
            <br />
            <input
              className="w-full py-2 mt-2 px-4 rounded border border-gray-400 shadow"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              className="w-full mt-2 py-2 px-4 rounded border border-gray-400 shadow"
              type="password"
              name="password"
              placeholder="******"
            />
          </div>
          {success && <p className="text-[#00bcf7]">{success && success}</p>}
          {error && <p className="text-red-500">{error && error}</p>}
          <fieldset className="fieldset">
            <label className="fieldset-label text-lg">
              <div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox mr-2"
                />
                Remember me
                <p className="pl-8 text-sm">
                  Save my login details for next time
                </p>
              </div>
            </label>
          </fieldset>
          <button
            onClick={handleGoogleLogin}
            className="px-4 md:px-8 py-1 w-full md:py-3 cursor-pointer border border-[#203F3F] bg-[#203F3F] text-white font-medium hover:bg-white hover:text-[#203F3F] transition"
          >
            Login
          </button>

          <p>
            Dont Have an Account? Please{" "}
            <Link
              to="/register"
              className="text-[#00bcf7] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
