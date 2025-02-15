import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        window.open("https://mail.google.com/mail");
        navigate("/login");
        Swal.fire({
            title: "Your Password Reset Successfully!",
            text: "Now Login",
            icon: "success"
          });
      })
      .catch(() => Swal.fire({
        title: "Your Password Reset process failed!",
        text: "Try again",
        icon: "error"
      }));
  };
  return (
    <div className="md:h-[500px] mt-12 md:mt-0 flex items-center justify-center">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-lg">
        <form onSubmit={handleResetPassword} className="mt-8 text-gray-800">
        <br />
          <input
            className="py-3 mr-4 px-4 bg-gray-200 text-gray-600 border-none"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <button className="px-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  hover:bg-white hover:text-purple-500 bg-purple-500 text-white border transition duration-300">
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
