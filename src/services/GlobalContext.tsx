import { createContext, useContext, useState } from 'react';
import type { Employee } from '../type';
import type { AuthenticationServiceType } from './AuthenticationService';
import useAxios from './UseAxios';

export type GlobalContextType = {
  employee: Employee | undefined;
  employees: Employee[];
  authenticationService: AuthenticationServiceType;
};

export type GlobalContextReducers = {
  updateEmployee: (employee: Employee) => void;
  updateEmployees: (employees: Employee[]) => void;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

function GlobalContextProvider(props: { children: React.ReactNode }) {
  const axiosRequest = useAxios();

  const [employee, setEmployee] = useState<Employee | undefined>();
  const [employees, setEmployees] = useState<Employee[]>([]);

  const updateEmployee = (employee: Employee) => {
    setEmployee(employee);
  };

  const updateEmployees = (employees: Employee[]) => {
    setEmployees(employees);
  };

  const reducers: GlobalContextReducers = {
    updateEmployee,
    updateEmployees,
  };

  return (
    <GlobalContext.Provider
      value={{
        employee,
        employees,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
