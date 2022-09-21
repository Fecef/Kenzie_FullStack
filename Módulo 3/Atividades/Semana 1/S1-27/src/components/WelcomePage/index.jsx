export function WelcomePage({ user, setIsLoggedIn }) {
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Bem-Vindo, {user}!</h1>
      <button onClick={handleLogout} type="button">
        Sair
      </button>
    </div>
  );
}
