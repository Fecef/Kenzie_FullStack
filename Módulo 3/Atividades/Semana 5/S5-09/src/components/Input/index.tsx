import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  label?: string;
}

export function Input({ placeholder, type, label }: iInputProps) {
  const [value, setValue] = useState("");

  return (
    <Container>
      {label}
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        name={label}
        id={label?.toLocaleLowerCase()}
        placeholder={placeholder}
      />
    </Container>
  );
}
