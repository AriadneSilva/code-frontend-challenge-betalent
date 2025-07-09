import React, { useMemo, useState, useEffect } from "react";
import { TableColumn } from "react-data-table-component";

import { DataTableBase } from "../../components/DataTableBase";
import { FilterTable } from "../../components/DataTableBase/FilterTable";

import { useEmployees } from "../../hooks/useEmployess";
import { EmployeesData } from "../../types/employees";

import { Container, SubheaderContainer, MoreFiltersContainer } from "./styles";

interface FilterOption {
  [key: string]: boolean;
}

interface Filters {
  [key: string]: FilterOption;
}

export const Home = () => {
  const { dataEmployees, getDataEmployees } = useEmployees();
  useEffect(() => {
    getDataEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filterText, setFilterText] = useState("");
  const [filtersSelected, setFiltersSelected] = useState<string[]>([]);
  const moreFiltersOptionsInitialValue = {};

  const [moreFiltersOptions, setMoreFiltersOptions] = useState<Filters>(
    moreFiltersOptionsInitialValue
  );

  // const handleCheckFilter = (
  //   newValue: boolean,
  //   filter: string,
  //   itemLabel: string
  // ) => {
  //   if (newValue) {
  //     setFiltersSelected([...filtersSelected, itemLabel]);
  //   } else {
  //     const newFilters = filtersSelected.filter(
  //       (filterSelected) => filterSelected !== itemLabel
  //     );
  //     setFiltersSelected(newFilters);
  //   }
  // };

  const handleCheckFilter = (
    newValue: boolean,
    filter: string,
    itemLabel: string
  ) => {
    const newFilterBlock = moreFiltersOptions[filter];
    newFilterBlock[itemLabel] = newValue;

    if (newValue) {
      setFiltersSelected([...filtersSelected, itemLabel]);
    } else {
      const newFilters = filtersSelected.filter(
        (filterSelected) => filterSelected !== itemLabel
      );
      setFiltersSelected(newFilters);
    }

    setMoreFiltersOptions({
      ...moreFiltersOptions,
      [filter]: newFilterBlock,
    });
  };
  const columns: TableColumn<EmployeesData>[] = [
    {
      name: "Foto",
      selector: ({ image }) => image,
      cell: (row: EmployeesData) => <div>{row.image}</div>,
      sortable: true,
      width: "10rem",
    },
    {
      name: "Nome",
      selector: ({ name }) => name,
      cell: (row: EmployeesData) => <div>{row.name}</div>,
      sortable: true,
      width: "10rem",
    },
    {
      name: "Cargo",
      selector: ({ job }) => job,
      cell: (row: EmployeesData) => <div>{row.job}</div>,
      sortable: true,
      width: "10rem",
    },
    {
      name: "Data de Admissao",
      selector: ({ admission_date }) => admission_date,
      cell: (row: EmployeesData) => <div>{row.admission_date}</div>,
      sortable: true,
      width: "10rem",
    },
    {
      name: "Telefone",
      selector: ({ phone }) => phone,
      cell: (row: EmployeesData) => <div>{row.phone}</div>,
      sortable: true,
      width: "10rem",
    },
  ];

  const filteredItems = dataEmployees.filter((row) => {
    if (filterText === "") {
      if (filtersSelected.length === 0) {
        return dataEmployees;
      }
      return [].some((value) => filtersSelected.includes(value));
    }

    if (filtersSelected.length === 0) {
      return JSON.stringify([row.name, row.job, row.phone, row.admission_date])
        .toLowerCase()
        .includes(filterText.toLowerCase());
    }

    return (
      [].some((value) => filtersSelected.includes(value)) &&
      JSON.stringify([row.name, row.job, row.phone, row.admission_date])
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
  });

  const SubheaderComponent = useMemo(() => {
    const handleClear = () => {
      setFilterText("");
      setFiltersSelected([]);
    };

    return (
      <SubheaderContainer>
        <FilterTable
          placeholder="Busque por nome, e-mail ou empresa"
          onFilter={(event) => setFilterText(event.target.value)}
          onClear={handleClear}
          filterText={filterText}
          hasMoreFilters
          numberOfSelectedFilters={filtersSelected.length}
          MoreFiltersComponent={
            <MoreFiltersContainer>
              {Object.entries(moreFiltersOptions).map(([title, items]) => (
                <div key={title}>
                  <h3 key={title}>{title}</h3>
                  {/* {Object.entries(items).map(([itemLabel, checked]) => (
                    <Checkbox
                      key={itemLabel}
                      labelText={itemLabel}
                      checked={checked}
                      onChange={(event) =>
                        handleCheckFilter(
                          event.target.checked,
                          title,
                          itemLabel
                        )
                      }
                    />
                  ))} */}
                </div>
              ))}
            </MoreFiltersContainer>
          }
        />

        {/* <AddNewPersonButton
          onClick={(event) => {
            event.preventDefault();
            navigate("person/add/verification");
            // TODO: Continuar usando useHistory() pra quando adicionar pessoa for uma feature
            // const oldFoundationUrl = process.env.REACT_APP_TERA_FOUNDATION_V1_URL + 'community/person'
            // window.open(oldFoundationUrl)
          }}
        >
          <PlusCircle color="var(--white)" size={20} />
          Nova Pessoa
        </AddNewPersonButton> */}
      </SubheaderContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  return (
    <>
      <Container>
        {/* {isLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )} */}

        <DataTableBase
          columns={columns}
          data={filteredItems}
          noDataComponent={`${
            filteredItems.length === 0
              ? "Carregando..."
              : "Nenhum dado encontrado"
          }`}
          pagination
          subHeader
          subHeaderComponent={SubheaderComponent}
        />
      </Container>
    </>
  );
};
