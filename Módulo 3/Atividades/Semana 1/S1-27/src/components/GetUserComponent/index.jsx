import { useState } from "react";

export function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");
  const handleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Insira seu nome"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Acessar com o nome</button>
    </form>
  );
}
