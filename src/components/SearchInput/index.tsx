import { ChangeEvent } from "react";
import { InputWrapper, Input } from "./styles";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({ value, onChange }: Props) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Buscar por nome, cargo ou telefone..."
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}
