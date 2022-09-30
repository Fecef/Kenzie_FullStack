import { Products } from "./Products";
import { Menu } from "./styles";

export function ProductList({ filteredProducts, handleClick, products }) {
  return (
    <Menu>
      {!filteredProducts.length
        ? products.map((product) => (
            <Products
              handleClick={handleClick}
              product={product}
              key={product.id}
            />
          ))
        : filteredProducts.map((product) => (
            <Products
              handleClick={handleClick}
              product={product}
              key={product.id}
            />
          ))}
    </Menu>
  );
}
