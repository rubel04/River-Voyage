import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#203F3F]" : "text-[#00232380]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#203F3F]" : "text-[#00232380]"
          }
          to="/updateProfile"
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#203F3F]" : "text-[#00232380]"
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
          <nav className="flex justify-center mt-3">
            <p className="text-purple-500 font-medium">
              Discover Hidden River Treasures – Start Your Journey!
            </p>
          </nav>
          <div className="border border-gray-100 my-4"></div>
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
          <a className="text-2xl cursor-pointer font-bold text-[#203F3F]">
            RiverVoyage
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="px-4 md:px-8 py-1 md:py-3 cursor-pointer border border-[#203F3F] hover:bg-[#203F3F] hover:text-white font-medium text-[#203F3F] transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

