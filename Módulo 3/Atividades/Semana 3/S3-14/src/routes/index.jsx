import { useState } from "react";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";

// Router Dom
import { Route, Routes } from "react-router-dom";

// Toastfy
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function RoutesMain() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const successToast = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const warningToast = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              successToast={successToast}
              warningToast={warningToast}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              user={user}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup successToast={successToast} warningToast={warningToast} />
          }
        />
        <Route path="*" element={<h1>Página não encontrada.</h1>} />
      </Routes>
    </>
  );
}
