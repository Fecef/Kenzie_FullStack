import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { TodosProvider } from "./contexts/todos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
