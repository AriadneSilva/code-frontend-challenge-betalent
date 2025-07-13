import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// Mock Thumbnail para isolar o teste
jest.mock("../components/Thumbnail", () => ({
  Thumbnail: ({ src }: { src: string }) => (
    <img src={src} alt="Logo da empresa" data-testid="thumbnail-logo" />
  ),
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Header", () => {
  it("deve renderizar o Thumbnail no header", () => {
    renderWithTheme(<Header />);
    const logo = screen.getByTestId("thumbnail-logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("Thumbnail_logo.png")
    );
  });
});
