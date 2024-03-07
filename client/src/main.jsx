import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./stores/UserContext.jsx";
import { Header } from "./components/Header.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { EventsList } from "./components/EventsList.jsx";
import { Footer } from "./components/Footer.jsx";
import { About } from "./components/About.jsx";
import { Contacts } from "./components/Contacts.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";
import { LoginForm } from "./components/LoginForm.jsx";
import { NewEvent } from "./components/NewEvent.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <EventsList />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contacts",
    element: (
      <>
        <Header />
        <Contacts />
        <Footer />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <RegisterForm />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <LoginForm />
        <Footer />
      </>
    ),
  },
  {
    path: "/addevent",
    element: (
      <>
        <Header />
        <NewEvent />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
