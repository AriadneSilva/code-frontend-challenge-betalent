import React, { useMemo, useState, useEffect, ChangeEvent } from "react";
import { TableColumn } from "react-data-table-component";

import { SearchInput } from "../../components/SearchInput";
import { DataTableBase } from "../../components/DataTableBase";
import { Thumbnail } from "../../components/Thumbnail";
import { Header } from "../../components/Header";

import { useEmployees } from "../../hooks/useEmployess";
import { EmployeesData } from "../../types/employees";

import ThumbLogo from "../../assets/Thumbnail_logo.png";

import { Container, Avatar } from "./styles";

export const Home = () => {
  const { dataEmployees, getDataEmployees } = useEmployees();
  useEffect(() => {
    getDataEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // criar um util.js depois
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  }

  function formatPhone(phone: string) {
    return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }

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

  return (
    <>
      <Container>
        <Header />
        <SearchInput value={search} onChange={handleSearch} />

        <DataTableBase columns={columns} data={filteredUsers || []} />
      </Container>
    </>
  );
};
