import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from '../assets/logo.png'

const Navbar = () => {
  const { user,logOutUser,setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
    .then(() => {
      setUser(null);
      alert('user logout successfully');
    })
    .catch(error =>{
      console.log(error.code);
    })
  }
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
          to="/UserProfile"
        >
          User Profile
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
            <p className="text-red-400 font-medium">
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
            // bg-[#203F3F] text-white hover:bg-white hover:text-[#203F3F] transition
            <button onClick={handleLogOut} className="px-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  bg-white text-[#203F3F] hover:bg-[#203F3F] hover:text-white transition duration-300">
              Log Out
            </button>
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
