import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInputIcon } from "../components/SearchInputIcon";

describe("SearchInputIcon", () => {
  it("deve renderizar o input com placeholder", () => {
    render(<SearchInputIcon value="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Pesquisar");
    expect(input).toBeInTheDocument();
  });

  it("deve chamar onChange ao digitar", () => {
    const onChangeMock = jest.fn();
    render(<SearchInputIcon value="" onChange={onChangeMock} />);
    const input = screen.getByPlaceholderText("Pesquisar");
    fireEvent.change(input, { target: { value: "João" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
