import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { HomeContainer } from "./styles";
import { api } from "../../services/api";

export function Home() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [duplicate, setDuplicate] = useState([]);

  function handleClick(productId) {
    const clickedProduct = products.find((el) => el.id === productId);

    if (currentSale.includes(clickedProduct)) {
      clickedProduct.qtde++;
      setDuplicate([...duplicate, clickedProduct.id]);
    } else {
      clickedProduct.qtde = 1;
      setCurrentSale([...currentSale, clickedProduct]);
    }
  }

  function removeFromCart(productId) {
    setCurrentSale(currentSale.filter((el) => el.id !== productId));
  }

  useEffect(() => {
    api
      .get()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeContainer>
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <Main
        handleClick={handleClick}
        removeFromCart={removeFromCart}
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        userInput={userInput}
        duplicate={duplicate}
      />
    </HomeContainer>
  );
}
