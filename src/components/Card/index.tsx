import { useState } from "react";
import { EmployeesData } from "../../types/employees";
import {
  CardContainer,
  Header,
  Info,
  Avatar,
  ToggleButton,
  Details,
  Label,
  Value,
  Icon,
} from "./styles";
import UpIcon from "../../assets/icons/charm_chevron-up.png";
import DownIcon from "../../assets/icons/charm_chevron-down.png";
import { formatDate, formatPhone } from "../../utils/utils";

type Props = {
  employees: EmployeesData;
};

export function Card({ employees }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <CardContainer>
      <Header onClick={() => setOpen(!open)} title="headerCard">
        <Info>
          <Avatar src={employees.image} alt={employees.name} />
          <Value>{employees.name}</Value>
        </Info>
        <ToggleButton>
          <Icon>
            {open ? (
              <img src={UpIcon} alt="up" />
            ) : (
              <img src={DownIcon} alt="down" />
            )}
          </Icon>
        </ToggleButton>
      </Header>

      {open && (
        <Details>
          <p>
            <Label>Cargo:</Label> <Value>{employees.job}</Value>
          </p>
          <p>
            <Label>Data de admissão:</Label>{" "}
            <Value>{formatDate(employees.admission_date)}</Value>
          </p>
          <p>
            <Label>Telefone:</Label>{" "}
            <Value>{formatPhone(employees.phone)}</Value>
          </p>
        </Details>
      )}
    </CardContainer>
  );
}
