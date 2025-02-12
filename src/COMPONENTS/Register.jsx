import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { registerUser, loginUserWithGoogle, setUser } =
    useContext(AuthContext);
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
    registerUser(email, password)
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
      <div className="space-y-4">
        <h2 className="uppercase text-2xl flex items-center text-white font-medium">
          Register With
        </h2>
        <button
          onClick={handleGoogleLogin}
          className="px-4 w-full md:px-8 py-1 md:py-3 font-medium cursor-pointer  bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
        >
          Google
        </button>
        <p className="uppercase text-sm text-center text-gray-400 font-medium">
          OR
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="text-gray-400">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox text-gray-400 border-2 border-gray-400 mr-2"
                />
                Remember me
                <p className="pl-8 text-sm">
                  Save my register details for next time
                </p>
              </div>
            </label>
          </fieldset>
          <button className="px-4 md:px-8 py-1 w-full md:py-3 cursor-pointer bg-purple-500 text-white font-medium hover:bg-white hover:text-purple-500 transition duration-300">
            Register
          </button>

          <p>
            Already Have an Account? Please{" "}
            <Link to="/login" className="text-purple-500 font-medium underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
