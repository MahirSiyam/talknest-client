import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo/linguistic_7514362.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  const { user, logOut } = use(AuthContext);

  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  
  const [isDarkMode , setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme" , isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  } , [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  const links = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/findTutors`}>Find Tutors</NavLink>
      </li>
      <li>
        <NavLink to={`/addTutors`}>Add Tutors</NavLink>
      </li>
      <li>
        <NavLink to={`/myTutors`}>My Tutors</NavLink>
      </li>
      <li>
        <NavLink to={`/myBookedTutors`}>My Booked Tutors</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 bg-base-100/35 backdrop-blur-xl shadow-md transition-all duration-300">
      <div className="navbar-start md:gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn p-0 mr-1 md:p-2 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className="flex justify-center items-center gap-1">
          <img className="w-8 md:w-12 hidden md:flex" src={logo} alt="" />

          <a className="text-md font-semibold md:text-2xl md:font-bold">Talknest</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 text-md font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-1 md:gap-3">
        
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={isDarkMode}
            className="theme-controller"
            value="business"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* avater */}
        <div className="tooltip tooltip-bottom" data-tip={user ? user?.email : ""}>
          <div className="avatar cursor-pointer">
            <div className="w-11 rounded-full">
              <img src={user ? user?.photoURL : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"} alt="" />
            </div>
          </div>
        </div>

        {/* btn */}
        {user ? (
          <button onClick={handleLogOut} className="btn bg-[#117a65] p-1 font-normal md:p-3 md:font-semibold text-white">Logout</button>
        ) : (
          <div className="flex gap-2">
            <NavLink to={`/auth/logIn`} className="btn bg-[#117a65] p-1 md:p-3 font-normal md:font-semibold text-white">
              Login
            </NavLink>
            <NavLink to={`/auth/register`} className="btn bg-[#117a65] p-1 font-normal md:p-3 md:font-semibold text-white">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
