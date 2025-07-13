import { EmployeesData } from "../../types/employees";
import { Card } from "../Card";
import { ListContainer, HeaderCell, HeaderRow } from "./styles";
import Circle from "../../assets/icons/circle.png";

type Props = {
  dataEmployees: EmployeesData[];
};

export function List({ dataEmployees }: Props) {
  return (
    <>
      <HeaderRow>
        <HeaderCell style={{ width: "60px" }}>FOTO</HeaderCell>
        <HeaderCell style={{ flex: 1 }}>NOME</HeaderCell>
        <HeaderCell style={{ width: "35px" }}>
          {<img src={Circle} alt="search" />}
        </HeaderCell>
      </HeaderRow>
      <ListContainer>
        {dataEmployees.map((emp) => (
          <Card key={emp.id} employees={emp} />
        ))}
      </ListContainer>
    </>
  );
}
