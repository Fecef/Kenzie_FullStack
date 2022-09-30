import {
  Button,
  Card,
  Category,
  DivText,
  DivImg,
  Img,
  Price,
  Title,
} from "./styles";

export function Products({ handleClick, product }) {
  return (
    <>
      <Card>
        <DivImg>
          <Img src={product.img} alt={product.name} />
        </DivImg>
        <DivText>
          <Title>{product.name}</Title>
          <Category>{product.category}</Category>
          <Price>
            {Number(product.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
          <Button onClick={() => handleClick(product.id)} type="button">
            Adicionar
          </Button>
        </DivText>
      </Card>
    </>
  );
}
