import {
  Card,
  Img,
  DescContainer,
  Title,
  Category,
  RemoveBtn,
  ImgContainer,
} from "./styles";

export function CartProduct({ removeFromCart, product }) {
  return (
    <Card>
      <ImgContainer>
        <Img src={product.img} alt={product.name} />
      </ImgContainer>

      <DescContainer>
        <Title>{product.name}</Title>
        <Category>{product.category}</Category>
        <span>Qtde: {product.qtde}</span>
        <RemoveBtn onClick={() => removeFromCart(product.id)}>
          Remover
        </RemoveBtn>
      </DescContainer>
    </Card>
  );
}
