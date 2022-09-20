import logo from "./logo.svg";
import "./App.css";
import { CenteredCard } from "./components/CenteredCards/CenteredCards";

function App() {
  return (
    <div>
      <CenteredCard>
        <h2>Felipe</h2>
        <p>Dev. Sênior</p>
        <span>Full Stack</span>
      </CenteredCard>
      <CenteredCard>
        <h2>Felipe</h2>
        <p>Dev. Sênior</p>
        <span>Full Stack</span>
      </CenteredCard>
      <CenteredCard>
        <h2>Felipe</h2>
        <p>Dev. Sênior</p>
        <span>Full Stack</span>
      </CenteredCard>
    </div>
  );
}

export default App;
