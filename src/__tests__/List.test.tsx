// File: src/components/List/List.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "../components/List";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// Mock do Card para simplificar o teste
jest.mock("../components/Card", () => ({
  Card: ({ employees }: { employees: any }) => (
    <div data-testid="mock-card">ID: {employees.id}</div>
  ),
}));

// Mock do ícone de círculo
jest.mock("../assets/icons/circle.png", () => "circle.png");

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("List Component", () => {
  const mockData = [
    {
      id: "1",
      name: "Alice",
      job: "Dev",
      admission_date: "2022-01-01",
      phone: "123456",
      image: "",
    },
    {
      id: "2",
      name: "Bob",
      job: "QA",
      admission_date: "2022-02-01",
      phone: "654321",
      image: "",
    },
  ];

  it("renderiza as células do cabeçalho corretamente", () => {
    renderWithTheme(<List dataEmployees={mockData} />);
    expect(screen.getByText("FOTO")).toBeInTheDocument();
    expect(screen.getByText("NOME")).toBeInTheDocument();
    expect(screen.getByAltText("search")).toBeInTheDocument();
  });

  it("renderiza um Card para cada funcionário", () => {
    renderWithTheme(<List dataEmployees={mockData} />);
    const cards = screen.getAllByTestId("mock-card");
    expect(cards).toHaveLength(mockData.length);
    expect(cards[0]).toHaveTextContent("ID: 1");
    expect(cards[1]).toHaveTextContent("ID: 2");
  });
});
