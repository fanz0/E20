import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../stores/UserContext";
import { useContext } from "react";

export const LoginForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3000/api/user/login", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw err.message;
          });
        }
        return response.json();
      })
      .then((data) => {
        navigate("/");
        setIsLoggedIn(true);
        alert(data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="mt-20 mb-10 flex flex-col items-center w-[80%] mx-auto">
      <div className="p-7 bg-gradient-to-b from-slate-400 to-blue-500 rounded-full">
        <h1 className="text-center text-2xl font-bold">Bentornato!</h1>
        <h2 className="text-center text-lg">
          Compila il form per fare l'accesso
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 animate-bounce mx-auto mt-3"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <form
        onSubmit={handleLogin}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          className="px-4 rounded-lg text-black focus:outline-blue-500 py-1"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="px-4 rounded-lg text-black focus:outline-blue-500 py-1"
          required
        />
        <button
          type="submit"
          className="px-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 mt-5"
        >
          Accedi
        </button>
      </form>
      <Link to="/register">
        <button className="mt-10 text-blue-500">
          Non hai un account? Registrati
        </button>
      </Link>
    </div>
  );
};
