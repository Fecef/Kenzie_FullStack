import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import {
  Header,
  HeaderTitle,
  EmptyMsg1,
  EmptyMsg2,
  Body,
  Footer,
  List,
} from "./styles";

export function Cart({ setCurrentSale, removeFromCart, currentSale }) {
  return (
    <>
      <Header>
        <HeaderTitle>Carrinho de compra</HeaderTitle>
      </Header>

      <Body>
        <List>
          {!currentSale.length ? (
            <div className="div">
              <EmptyMsg1>Sua Sacola está vazia</EmptyMsg1>
              <EmptyMsg2>Adicione items</EmptyMsg2>
            </div>
          ) : (
            currentSale.map((product, i) => (
              <CartProduct
                removeFromCart={removeFromCart}
                product={product}
                key={i}
              />
            ))
          )}
        </List>
      </Body>

      <Footer>
        {!!currentSale.length && (
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        )}
      </Footer>
    </>
  );
}
