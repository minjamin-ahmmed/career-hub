import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

             <NavLink to="/" className="hover:text-purple-600 hover:font-bold">Statistics</NavLink>
             <NavLink to="/appliedJobs" className="hover:text-purple-600 hover:font-bold">Applied Jobs</NavLink>
             <NavLink to="/blog" className="hover:text-purple-600 hover:font-bold">Blog</NavLink>
              
              
            </ul>
          </div>
          <a className="text-xl font-bold hover:text-purple-500">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1">

            <NavLink to="/" className="hover:text-purple-600 hover:font-bold">Statistics</NavLink>
             <NavLink to="/appliedJobs" className="hover:text-purple-600 hover:font-bold">Applied Jobs</NavLink>
             <NavLink to="/blog" className="hover:text-purple-600 hover:font-bold">Blog</NavLink>
              

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-gradient-to-r from-indigo-500 to-purple-500">Start Applying</a>
        </div>
      </div>
    );
};

export default Navbar;