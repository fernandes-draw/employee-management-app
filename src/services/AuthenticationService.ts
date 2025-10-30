import type { Axios } from 'axios';
import { useState } from 'react';
import type { GlobalContextReducers } from './GlobalContext';

export type AuthenticationServiceType = {
  loadingEmployeeInformation: boolean;
  employeeAuthenticationError: boolean;
  submitLogin: (email: string, password: string) => void;
};

export default function useAuthenticationService(
  request: Axios,
  reducers: GlobalContextReducers
): AuthenticationServiceType {
  const { updateEmployee } = reducers;

  const [loadingEmployeeInformation, setLoadingEmployeeInformation] =
    useState<boolean>(false);

  const [employeeAuthenticationError, setEmployeeAuthenticationError] =
    useState<boolean>(false);

  const submitLogin = async (email: string, password: string) => {
    try {
      setLoadingEmployeeInformation(true);
      setEmployeeAuthenticationError(false);

      const res = await request.post('/auth/login', {
        email,
        password,
      });

      updateEmployee(res.data);
    } catch (e) {
      console.log(e);
      setEmployeeAuthenticationError(true);
    } finally {
      setLoadingEmployeeInformation(false);
    }
  };

  return {
    loadingEmployeeInformation,
    employeeAuthenticationError,
    submitLogin,
  };
}
