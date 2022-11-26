import logo from "../../assets/Logo.svg";
import { Main } from "./styles";
import { FormLogin } from "../../components/Form";
import { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";
import { Navigate } from "react-router-dom";

export function Home() {
  const { user, loading } = useContext(AccountContext);
  const token = localStorage.getItem("@TOKEN");

  if (loading) return null;

  return user.message || token == null ? (
    <Main>
      <img src={logo} alt="Logo" />
      <FormLogin />
    </Main>
  ) : (
    <Navigate to="/dashboard" />
  );
}
