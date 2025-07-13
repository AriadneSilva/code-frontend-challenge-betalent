import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "../components/Card";
import { EmployeesData } from "../types/employees";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// Mock de um usuário
const mockEmployeesData: EmployeesData = {
  id: "1",
  name: "José da Silva",
  phone: "11999999999",
  image: "https://via.placeholder.com/40",
  job: "Back-end",
  admission_date: "2022-02-20",
};

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Card", () => {
  it("renderiza o nome e a imagem do usuário", () => {
    renderWithTheme(<Card employees={mockEmployeesData} />);

    expect(screen.getByText("José da Silva")).toBeInTheDocument();
    expect(screen.getByAltText("José da Silva")).toHaveAttribute(
      "src",
      mockEmployeesData.image
    );
  });

  it("não mostra os detalhes inicialmente", () => {
    renderWithTheme(<Card employees={mockEmployeesData} />);

    expect(screen.queryByText("Back-end")).not.toBeInTheDocument();
  });

  it("mostra os detalhes ao clicar no card", () => {
    renderWithTheme(<Card employees={mockEmployeesData} />);
    fireEvent.click(screen.getByTitle("headerCard")); //abre
    expect(screen.getByText("Back-end")).toBeInTheDocument();
    expect(screen.getByText("11999999999")).toBeInTheDocument();
    expect(screen.getByText("19/02/2022")).toBeInTheDocument();
  });

  it("fecha os detalhes ao clicar novamente", () => {
    renderWithTheme(<Card employees={mockEmployeesData} />);
    fireEvent.click(screen.getByTitle("headerCard")); // abre
    fireEvent.click(screen.getByTitle("headerCard")); // fecha
    expect(screen.queryByText("Back-end")).not.toBeInTheDocument();
  });
});
