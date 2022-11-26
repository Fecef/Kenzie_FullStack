import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "../components/Spinner/Spinner";
import { SpinnerContext } from "../contexts/SpinnerContext";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoute } from "./ProtectedRoutes";

export function RoutesMain() {
  const { spinner } = useContext(SpinnerContext);

  return (
    <>
      {spinner && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}
