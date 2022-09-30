import { HeaderContainer, Nav } from "./styles";
import { SearchInput } from "./Input";
import { Brand } from "./Logo";

export function Header({ userInput, setUserInput, products, setFilteredProducts }) {
  return (
    <HeaderContainer>
      <Nav>
        <Brand />
        <SearchInput
          setFilteredProducts={setFilteredProducts}
          products={products}
          userInput={userInput}
          setUserInput={setUserInput}
        />
      </Nav>
    </HeaderContainer>
  );
}
