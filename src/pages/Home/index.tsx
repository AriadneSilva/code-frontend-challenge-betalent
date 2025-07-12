import React, { useMemo, useState, useEffect, ChangeEvent } from "react";
import { TableColumn } from "react-data-table-component";
import { SearchInputIcon } from "../../components/SearchInputIcon";
import { DataTableBase } from "../../components/DataTableBase";
import { List } from "../../components/List";

import { useEmployees } from "../../hooks/useEmployess";
import { EmployeesData } from "../../types/employees";
import { Container, Avatar, SearchContainer, Title } from "./styles";

import { formatDate, formatPhone } from "../../utils/utils";

export const Home = () => {
  const { dataEmployees, getDataEmployees, useIsMobile } = useEmployees();

  const [search, setSearch] = useState("");
  const isMobile = useIsMobile();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = useMemo(() => {
    const lower = search.toLowerCase();
    return dataEmployees.filter(
      (user) =>
        user.name.toLowerCase().includes(lower) ||
        user.job.toLowerCase().includes(lower) ||
        user.phone.includes(lower)
    );
  }, [dataEmployees, search]);

  const columns: TableColumn<EmployeesData>[] = [
    {
      name: "Foto",
      selector: (row) => row.image,
      cell: (row) => <Avatar src={row.image} alt={row.name} />,
      width: "80px",
    },
    {
      name: "Nome",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Cargo",
      selector: (row) => row.job,
      sortable: true,
    },
    {
      name: "Data de admissão",
      selector: (row) => formatDate(row.admission_date),
      sortable: true,
    },
    {
      name: "Telefone",
      selector: (row) => formatPhone(row.phone),
    },
  ];

  useEffect(() => {
    getDataEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SearchContainer direction={isMobile ? "column" : "row"}>
        <Title>Funcionários</Title>
        <SearchInputIcon value={search} onChange={handleSearch} />
      </SearchContainer>
      {isMobile ? (
        <List dataEmployees={filteredUsers} />
      ) : (
        <DataTableBase columns={columns} data={filteredUsers || []} />
      )}
    </Container>
  );
};
