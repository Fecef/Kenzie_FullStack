import { useState } from "react";
import "./style.css";

export function Form({
  listTransactions,
  setListTransactions,
  filter,
  setFilter,
}) {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value.replace(/\D/g, ""));

  function addToList(e) {
    e.preventDefault();

    const moneyIn = {
      description: e.target.descricao.value,
      type: e.target.tipoValor.value,
      value: e.target.valor.value,
    };

    const moneyOut = {
      description: e.target.descricao.value,
      type: e.target.tipoValor.value,
      value: e.target.valor.value * -1,
    };

    if (e.target.tipoValor.value === "Entrada") {
      setListTransactions([...listTransactions, moneyIn]);
      setFilter([...filter, moneyIn]);
    } else {
      setListTransactions([...listTransactions, moneyOut]);
      setFilter([...filter, moneyOut]);
    }
  }

  return (
    <form onSubmit={addToList}>
      <div className="form-descricao d-flex-column">
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Digite aqui sua descrição"
          maxLength="70"
          autoComplete="off"
          required
        />
        <small>Ex: Compra de roupas</small>
      </div>

      <div className="d-flex-row">
        <div className="form-valor d-flex-column">
          <label>Valor</label>
          <input
            type="text"
            name="valor"
            id="valor"
            placeholder="1"
            autoComplete="off"
            required
            value={value}
            onChange={handleChange}
          />
          <span>R$</span>
        </div>

        <div className="d-flex-column">
          <label>Tipo de valor</label>
          <select name="tipo-valor" id="tipoValor">
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button type="submit">Insira valor</button>
    </form>
  );
}
