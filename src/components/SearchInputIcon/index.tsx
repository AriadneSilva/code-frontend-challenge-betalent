import { SearchContainerIcon, Input, Icon } from "./styles";
import search from "../../assets/icons/search.png";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInputIcon({ value, onChange }: Props) {
  return (
    <SearchContainerIcon>
      <Input
        type="text"
        placeholder="Pesquisar"
        value={value}
        onChange={onChange}
      />
      <Icon>
        <img src={search} alt="search" />
      </Icon>
    </SearchContainerIcon>
  );
}
