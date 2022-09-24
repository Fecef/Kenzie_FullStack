import "./style.css";

export function TotalMoney({ listTransactions }) {
  const total = () => listTransactions.reduce((a, b) => a + +b.value, 0);

  return (
    <section>
      <h2>Valor total:</h2>
      <p>O valor se refere ao saldo</p>
      <span>R$ {total().toLocaleString("brl-BR")}</span>
    </section>
  );
}
