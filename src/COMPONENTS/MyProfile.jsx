import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome, {user.displayName}!
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt={`${user?.displayName}'s profile`}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-700">
              {user.displayName}
            </p>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/updateProfile">
            <button className="px-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  hover:bg-white hover:text-purple-500 bg-purple-500 text-white border transition duration-300">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
