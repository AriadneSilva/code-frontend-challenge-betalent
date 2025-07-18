import { Container } from "./styles";
import { Thumbnail } from "../Thumbnail";
import ThumbLogo from "../../assets/images/Thumbnail_logo.png";

export function Header() {
  return (
    <Container>
      <Thumbnail src={ThumbLogo} />
    </Container>
  );
}
