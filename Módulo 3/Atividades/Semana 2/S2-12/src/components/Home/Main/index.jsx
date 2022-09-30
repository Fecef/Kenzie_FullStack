import { Cart } from "./Cart";
import { ProductList } from "./ProductsList";
import {
  Aside,
  EraseBtn,
  MainContainer,
  SearchContainer,
  SearchResult,
  Section,
} from "./styles";

export function Main({
  setCurrentSale,
  removeFromCart,
  currentSale,
  handleClick,
  products,
  filteredProducts,
  setFilteredProducts,
  userInput,
  duplicate,
}) {
  return (
    <MainContainer>
      <Section>
        {!!filteredProducts.length && (
          <SearchContainer>
            <SearchResult>
              Resultados para: <span>{userInput}</span>
            </SearchResult>
            <EraseBtn onClick={() => setFilteredProducts([])}>
              Limpar histórico
            </EraseBtn>
          </SearchContainer>
        )}

        <ProductList
          filteredProducts={filteredProducts}
          handleClick={handleClick}
          products={products}
        />
      </Section>

      <Aside>
        <Cart
          removeFromCart={removeFromCart}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          duplicate={duplicate}
        />
      </Aside>
    </MainContainer>
  );
}
