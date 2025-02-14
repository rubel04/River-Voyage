import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-white"
          }
          to="/updateProfile"
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-white"
          }
          to="/myProfile"
        >
          My Profile
        </NavLink>
      </li>
    </>
  );
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" && (
        <div>
          <nav className="flex justify-center pt-3">
            <p className="text-red-500 animate__animated animate__fadeInDown animate__repeat-1	 font-medium animate-pulse">
              Discover Hidden River Treasures – Start Your Journey!
            </p>
          </nav>
          <div className="border border-gray-600 my-4"></div>
        </div>
      )}
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2"
            >
              {navlinks}
            </ul>
          </div>
          <a className="text-2xl cursor-pointer font-bold text-purple-500 italic">
            <img className="w-30" src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                  <img className="w-13 h-13 border-2 cursor-pointer rounded-full" src={user?.photoURL} alt="user-image" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-black rounded-box z-[1] w-32"
                >
                  <li>
                    <p className="text-base font-medium">{user?.displayName}</p>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleLogOut}
                className="px-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
