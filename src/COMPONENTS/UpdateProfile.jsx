import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

const UpdateProfile = () => {
  const { updateUserProfile, setUser ,setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({ name, photo })
      .then(() => {
        // console.log(auth.currentUser);
        setUser(auth.currentUser);
        setIsLoading(false)
        navigate("/myProfile");
      })
      .catch(() => {
        // console.log(error);
      });
  };
  return (
    <div className="md:h-[500px] mt-12 md:mt-0 flex items-center justify-center">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-lg">
        <form onSubmit={handleUpdateProfile} className="mt-8 text-center">
          <div className="flex items-center">
            <div>
              <br />
              <input
                className="py-3 mr-4 px-4 bg-gray-200 text-gray-600 border-none"
                type="text"
                name="name"
                placeholder="Update Name"
              />
            </div>
            <div>
              <br />
              <input
                className="py-3 mr-4 px-4 bg-gray-200 text-gray-600 border-none"
                type="text"
                name="photo"
                placeholder="Update Photo URL"
              />
            </div>
          </div>
          <button className="px-4 mt-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  hover:bg-white hover:text-purple-500 bg-purple-500 text-white border transition duration-300">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
