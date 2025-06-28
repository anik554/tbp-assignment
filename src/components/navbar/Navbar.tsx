import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar text-white bg-transparent absolute z-20 w-9/12">
      {/* Start */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li><a>Discover</a></li>
            <li><a>Destination</a></li>
            <li><a>Trip Plan</a></li>
            <li><a>About Us</a></li>
          </ul>
        </div>
        <a className="text-xl">Kluyran</a>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Discover</a></li>
          <li><a>Destination</a></li>
          <li><a>Trip Plan</a></li>
          <li><a>About Us</a></li>
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <details>
              <summary>Language</summary>
              <ul className="p-2 bg-base-100 text-black rounded-box">
                <li><a>English</a></li>
                <li><a>Bangla</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <a className="btn bg-red-500 text-white rounded-xl ">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
