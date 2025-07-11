import { ChangeEvent } from "react";
import { Input } from "./styles";


type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({ value, onChange }: Props) {
  return (
    <Input
      type="text"
      placeholder="Pesquisar"
      value={value}
      onChange={onChange}
    />
  );
}
