import { useState } from 'react';
import useGlobalContext, {
  type GlobalContextType,
} from '../../services/GlobalContext';
import { Form } from '../Form/Form';
import { FormInput } from '../Form/FormInput';
import { Loading } from '../Loading/Loading';

interface EmployeeLogin {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { authenticationService } = useGlobalContext() as GlobalContextType;
  const [employeeLogin, setEmployeeLogin] = useState<EmployeeLogin>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeLogin({
      ...employeeLogin,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authenticationService.submitLogin(
      employeeLogin.email,
      employeeLogin.password
    );
  };

  return (
    <Form
      buttonText={'Login'}
      error={authenticationService.employeeAuthenticationError}
      errorMessage={'Invalid email or password'}
      action={handleLogin}
      width={'25rem'}
      height={
        authenticationService.employeeAuthenticationError ? '20rem' : '17rem'
      }
    >
      {authenticationService.loadingEmployeeInformation ? (
        <div className='center'>
          <Loading />
        </div>
      ) : (
        <>
          <FormInput
            type={'email'}
            label={'Email'}
            name={'email'}
            placeholder={'Employee email'}
            content={employeeLogin.email}
            handleInput={handleInputChange}
          />
          <FormInput
            type={'password'}
            label={'Password'}
            name={'password'}
            placeholder={'Employee password'}
            content={employeeLogin.password}
            handleInput={handleInputChange}
          />
        </>
      )}
    </Form>
  );
};
