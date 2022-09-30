import { Button, Form, Input } from "./styles";

export function SearchInput({
  userInput,
  setUserInput,
  products,
  setFilteredProducts,
}) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        setFilteredProducts(
          products.filter(
            (el) =>
              el.category.toLowerCase().replaceAll("í", "i") ===
              userInput.toLowerCase().replaceAll("í", "i")
          )
        );
      }}
    >
      <Input
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        type="search"
        placeholder="Ex: Sanduíches"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
}
