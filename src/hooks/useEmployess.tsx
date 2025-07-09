import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

import { EmployeesData } from "../types/employees";
import { api } from "../service/api";

//import { Backdrop, CircularProgress } from "@mui/material";

interface EmployeesContextData {
  dataEmployees: EmployeesData[];
  getDataEmployees: () => Promise<void>;
  //   setDataForm: Dispatch<SetStateAction<any>>;
  //   retornaValor: () => Promise<void>;
}

interface EmployeesProviderProps {
  children: ReactNode;
}

const EmployeesContext = createContext<EmployeesContextData>(
  {} as EmployeesContextData
);
export const EmployeesProvider = ({ children }: EmployeesProviderProps) => {
  //const [isLoading, setLoading] = useState(true);
  const [dataEmployees, setDataEmployees] = useState<EmployeesData[]>([]);
  //   const [dataForm, setDataForm] = useState({
  //     idMarca: "",
  //     idModelo: "",
  //     idAno: "",
  //   });
  //   const [dataValor, setDataValor] = useState<ValorData>();

  async function getEmployees(): Promise<EmployeesData[]> {
    const response = await api.get("employees");
    return response.data;
  }

  const getDataEmployees = async () => {
    //setLoading(true);
    const data = await getEmployees();
    setDataEmployees(data as EmployeesData[]);
    //setLoading(false);
  };

  //   async function fillModelos(idMarca: string) {
  //     const data = await buscaModelos(idMarca);
  //     setDataModelos(data.modelos as ModeloData[]);
  //   }

  //   async function fillAnos(idMarca: string, idModelo: string) {
  //     const data = await buscaAnos(idMarca, idModelo);
  //     setDataAnos(data as AnoData[]);
  //   }

  //   async function retornaValor() {
  //     setLoading(true);
  //     const data = await buscaValor(
  //       dataForm.idMarca,
  //       dataForm.idModelo,
  //       dataForm.idAno
  //     );

  //     setDataValor(data as ValorData);
  //     setLoading(false);
  //   }

  // //USE EFFECT HOOKS
  useEffect(() => {
    const hydrate = async () => {
      try {
        getDataEmployees();
      } catch (e) {
        console.log("Erro ao carregar os empregados");
      }
    };
    hydrate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   useEffect(() => {
  //     if (dataForm.idMarca !== "") {
  //       fillModelos(dataForm.idMarca);
  //     }
  //     if (dataForm.idMarca !== "" && dataForm.idModelo !== "") {
  //       fillAnos(dataForm.idMarca, dataForm.idModelo);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [dataForm]);

  //   return isLoading ? (
  //     <>
  //       <Backdrop sx={{ color: "#fff" }} open={isLoading}>
  //         <CircularProgress color="inherit" />
  //       </Backdrop>
  //     </>
  //   ) : (
  return (
    <EmployeesContext.Provider
      value={{
        dataEmployees,
        getDataEmployees,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = (): EmployeesContextData => {
  return useContext(EmployeesContext);
};
