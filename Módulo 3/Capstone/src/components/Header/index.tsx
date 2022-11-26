import logo from "../../assets/new-logo.svg";
import { AppHeader } from "./styles";
import { ButtonStyled, LogoutButton } from "../../styles/button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "../DarkModeToggle";

export const Header = () => {
  const { isDarkMode, setIsDarkMode, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function Logout() {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  function DarkMode() {
    setIsDarkMode(!isDarkMode);

    const bodyPage = document.querySelector("body");
    bodyPage?.classList.toggle("darkMode");
  }

  return (
    <AppHeader>
      <div className="headerLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="headerButtons">
        {window.location.pathname === "/dashboard" && (
          <LogoutButton onClick={Logout}>Sair</LogoutButton>
        )}
        <DarkModeToggle DarkMode={DarkMode} isDarkMode={isDarkMode} />
      </div>
    </AppHeader>
  );
};
