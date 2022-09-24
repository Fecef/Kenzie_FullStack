import "./style.css";

export function Card({
  transaction,
  listTransactions,
  setListTransactions,
  filter,
  setFilter,
}) {
  function removeCard() {
    setListTransactions(listTransactions.filter((el) => el !== transaction));
    setFilter(filter.filter((el) => el !== transaction));
  }

  return (
    <li className={transaction.type}>
      <div>
        <h2>{transaction.description}</h2>
        <small>{transaction.type}</small>
      </div>
      <div className="valor-entrada">
        <p className={+transaction.value > 0 ? "positivo" : "negativo"}>
          R$ {(+transaction.value).toLocaleString("brl-BR")}
        </p>
        <i onClick={removeCard} className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
}
