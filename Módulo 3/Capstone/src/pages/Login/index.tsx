import { Navigate } from "react-router-dom";
import { Login } from "../../components/Form/FormLogin";
import { Header } from "../../components/Header";

export const LoginPage = () => {
  const userId = localStorage.getItem("@userId");

  return !userId ? (
    <>
      <Header />
      <Login />
    </>
  ) : (
    <Navigate to="/dashboard" />
  );
};
