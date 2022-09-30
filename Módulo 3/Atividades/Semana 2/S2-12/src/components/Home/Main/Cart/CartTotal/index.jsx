import { TotalContainer, TotalText, TotalValue, RemoveBtn, Hr } from "./styles";

export function CartTotal({ currentSale, setCurrentSale }) {
  return (
    <>
      <Hr />

      <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalValue>
          {currentSale
            .reduce((a, b) => a + b.price * b.qtde, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </TotalValue>
      </TotalContainer>

      <RemoveBtn onClick={() => setCurrentSale([])}>Remover todos</RemoveBtn>
    </>
  );
}
