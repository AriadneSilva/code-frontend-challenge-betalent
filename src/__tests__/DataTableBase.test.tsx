import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { DataTableBase } from "../components/DataTableBase";
import { theme } from "../styles/theme";

const mockColumns = [
  { name: "Nome", selector: (row: any) => row.name },
  { name: "Cargo", selector: (row: any) => row.job },
];

const mockData = [
  { id: 1, name: "Ariadne Silva", job: "Frontend Dev" },
  { id: 2, name: "Lucas Lima", job: "Backend Dev" },
];

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("DataTableBase", () => {
  it("renderiza os títulos das colunas", () => {
    renderWithTheme(<DataTableBase columns={mockColumns} data={mockData} />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Cargo")).toBeInTheDocument();
  });

  it("renderiza as linhas com os dados corretos", () => {
    renderWithTheme(<DataTableBase columns={mockColumns} data={mockData} />);
    expect(screen.getByText("Ariadne Silva")).toBeInTheDocument();
    expect(screen.getByText("Frontend Dev")).toBeInTheDocument();
    expect(screen.getByText("Lucas Lima")).toBeInTheDocument();
    expect(screen.getByText("Backend Dev")).toBeInTheDocument();
  });

  it("mostra mensagem se não houver dados", () => {
    renderWithTheme(<DataTableBase columns={mockColumns} data={[]} />);
    expect(
      screen.getByText("Nenhum funcionário encontrado.")
    ).toBeInTheDocument();
  });
});
