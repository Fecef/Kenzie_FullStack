import { Container } from "./styles";
import { FaSun, FaMoon } from "react-icons/fa";

interface iDarkModeToggleProps {
  DarkMode: () => void;
  isDarkMode: boolean;
}

export const DarkModeToggle = ({
  DarkMode,
  isDarkMode,
}: iDarkModeToggleProps) => {
  return (
    <Container onChange={DarkMode} isDarkMode={isDarkMode}>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <FaMoon className="fas fa-moon" />
        <FaSun className="fas fa-sun" />
        <div className="ball"></div>
      </label>
    </Container>
  );
};
