import "./App.css";

import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Intro } from "./components/Intro";

import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [filter, setFilter] = useState([]);


  return isLoggedIn ? (
    <div className="App">
      <Header setIsLoggedIn={setIsLoggedIn} />

      <main>
        <div className="div1">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            filter={filter}
            setFilter={setFilter}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>

        <div className="div2">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </main>
    </div>
  ) : (
    <div className="App">
      <Intro setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
