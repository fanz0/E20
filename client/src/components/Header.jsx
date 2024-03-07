import logo from "../../images/E20_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../stores/UserContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:3000/api/user/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
        setIsLoggedIn(false);
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center mt-10">
      <img src={logo} title="logo" className="w-[80%] md:w-[20%] max-w-60" />
      <div className="flex  w-[80%] md:w-[60%] justify-evenly md:justify-end md:gap-10">
        <Link
          to="/"
          className="hover:bg-zinc-800 cursor-pointer w-[40%] max-w-32 p-1 rounded-lg font-thin"
        >
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h3>Home</h3>
          </div>
        </Link>

        {isLoggedIn && (
          <div
            className="flex flex-col items-center hover:bg-zinc-800 cursor-pointer w-[40%] max-w-32 p-1 rounded-lg font-thin"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <h3>Logout</h3>
          </div>
        )}

        {!isLoggedIn && (
          <Link
            to="/login"
            className="w-[40%] max-w-32 p-1 rounded-lg font-thin hover:bg-zinc-800 cursor-pointer"
          >
            <div className=" flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <h3>Accedi</h3>
            </div>
          </Link>
        )}

        {!isLoggedIn && (
          <Link
            to="/register"
            className="w-[40%] max-w-32 p-1 rounded-lg font-thin hover:bg-zinc-800 cursor-pointer"
          >
            <div className=" flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              <h3>Registrati</h3>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
