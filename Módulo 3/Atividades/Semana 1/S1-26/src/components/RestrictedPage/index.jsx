export function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return isLoggedIn ? (
    <div>
      <h1>Bem-Vindo {user}</h1>
      <button onClick={Logout} type="button">
        Sair
      </button>
    </div>
  ) : (
    <div>
      <h1>Você não pode acessar esta página</h1>
      <button onClick={Login} type="button">
        Entrar
      </button>
    </div>
  );
}
