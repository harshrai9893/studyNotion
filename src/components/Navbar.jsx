import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { toast } from "react-toastify";
import "../main";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const notify = () => toast("Wow so easy!");

  return (
    <div className="flex justify-evenly ">
      <Link className="" to="/">
        <img src={logo} alt="logo" width={160} height={50} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-3 mt-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 mt-3 mr-3 gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button
              onClick={() => {
                [
                  setIsLoggedIn(false),
                  toast.error("kb banega project", { position: "top-center" }),
                ];
              }}
            >
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
