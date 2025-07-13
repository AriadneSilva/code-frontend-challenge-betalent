import { render, screen } from "@testing-library/react";
import { Thumbnail } from "../components/Thumbnail";
import ThumbLogo from "../assets/images/Thumbnail_logo.png";

describe("Thumbnail", () => {
  it("deve renderizar a imagem com o src e alt corretos", () => {
    render(<Thumbnail src={ThumbLogo} alt={"BeTalent"} />);
    const img = screen.getByAltText("BeTalent");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", ThumbLogo);
  });
});
