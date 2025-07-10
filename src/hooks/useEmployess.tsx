import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";

import { EmployeesData } from "../types/employees";
import { api } from "../service/api";

interface EmployeesContextData {
  dataEmployees: EmployeesData[];
  getDataEmployees: () => Promise<void>;
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
