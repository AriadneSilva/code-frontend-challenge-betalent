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


    async function getDataEmployees() {
      try {
        const response = await api.get("employees");
        const data = response.data;

        if (Array.isArray(data)) {
          setDataEmployees(data);
        } else {
          setDataEmployees([]); // caso não venha como array
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setDataEmployees([]); // fallback em caso de erro
      }
    } 

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
