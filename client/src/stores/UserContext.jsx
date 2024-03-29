import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://e20-api.vercel.app/api/user/refresh", {
      method: "get",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Sessione Autorizzata!") {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
