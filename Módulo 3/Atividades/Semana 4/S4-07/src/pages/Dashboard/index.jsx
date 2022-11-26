import { MainContent } from "./Main";
import { HeaderBar } from "./Header";
import { Navbar } from "./Nav";

export function Dashboard() {
  return (
    <div>
      <Navbar />
      <hr />
      <HeaderBar />
      <hr />
      <MainContent />
    </div>
  );
}
