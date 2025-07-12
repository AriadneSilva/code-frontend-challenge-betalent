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
  useIsMobile: () => boolean;
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

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
  }

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
        useIsMobile,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = (): EmployeesContextData => {
  return useContext(EmployeesContext);
};
