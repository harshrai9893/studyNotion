import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { toast } from "react-toastify";
import "../main";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const notify = () => toast("Wow so easy!");

  return (
    <div className="flex justify-between items-centers w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link className="" to="/">
        <img src={Logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="text-white flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

         {/* login signup logout dashboard */}

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-gray-800 text-gray-100 py-[8px] 
            px-[12px] rounded-[8px] border border-gray-700  ">Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-gray-800 text-gray-100 py-[8px] 
            px-[12px] rounded-[8px] border border-gray-700  ">Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button className="bg-gray-800 text-gray-100 py-[8px] 
            px-[12px] rounded-[8px] border border-gray-700  "
              onClick={() => {
                [
                  setIsLoggedIn(false),
                  toast.error("kb banega project", { position: "top-center" }),
                ];
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-gray-800 text-gray-100 py-[8px] 
            px-[12px] rounded-[8px] border border-gray-700  ">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
