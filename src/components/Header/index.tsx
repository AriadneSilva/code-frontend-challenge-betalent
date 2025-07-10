import { Container, Title } from "./styles";
import { Thumbnail } from "../Thumbnail";
import ThumbLogo from "../../assets/Thumbnail_logo.png";

type Props = {
  title?: string;

};

export function Header({ title = "Colaboradores" }: Props) {
  return (    
      <Thumbnail src={ThumbLogo} />
    
  );
}
