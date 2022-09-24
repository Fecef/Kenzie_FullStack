import { useState } from "react";
import { Card } from "../Card";
import "./style.css";

import NoCard from "../../assets/NoCard.svg";

export function List({
  listTransactions,
  setListTransactions,
  filter,
  setFilter,
}) {
  function filterEntrada() {
    setFilter(listTransactions.filter((el) => el.type === "Entrada"));
  }

  function filterDespesa() {
    setFilter(listTransactions.filter((el) => el.type === "Despesa"));
  }

  function filterTodos() {
    setFilter([]);
  }

  return (
    <section className="section">
      <div>
        <h2>Resumo Financeiro</h2>

        <div>
          <button onClick={filterTodos}>Todos</button>
          <button onClick={filterEntrada}>Entradas</button>
          <button onClick={filterDespesa}>Despesas</button>
        </div>
      </div>

      {listTransactions.length > 0 ? (
        <menu className="menu">
          {filter.length > 0
            ? filter.map((el, i) => (
                <Card
                  transaction={el}
                  key={i}
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  setFilter={setFilter}
                  filter={filter}
                />
              ))
            : listTransactions.map((el, i) => (
                <Card
                  transaction={el}
                  key={i}
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              ))}
        </menu>
      ) : (
        <menu className="menu">
          <h1>Você ainda não possui nenhum lançamento</h1>
          <img className="no-card" src={NoCard} alt="No Content" />
        </menu>
      )}
    </section>
  );
}
