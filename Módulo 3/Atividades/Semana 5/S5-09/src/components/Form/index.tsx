import { useState } from "react";
import { Input } from "../Input";
import { Container } from "./styles";

interface iFormProps {
  name: string;
  age: string;
  hobby: string;
}

export function Form({ name, age, hobby }: iFormProps) {
  const [user, setUser] = useState<iFormProps[]>([] as iFormProps[]);

  function handleSubmit(e: any) {
    e.preventDefault();

    const { nome } = e.target;
    const { idade } = e.target;
    const { hobby } = e.target;

    const userData = {
      name: nome.value,
      age: idade.value,
      hobby: hobby.value,
    };

    setUser([...user, userData]);
  }

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <Input type="text" placeholder={name} label={name} />
      <Input type="number" placeholder={age} label={age} />
      <Input type="text" placeholder={hobby} label={hobby} />

      <div>
        <button type="submit">Enviar</button>
      </div>
    </Container>
  );
}
