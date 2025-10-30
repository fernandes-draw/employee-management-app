import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm';
import useGlobalContext, {
  type GlobalContextType,
} from '../services/GlobalContext';

export default function LoginPage() {
  const { employee } = useGlobalContext() as GlobalContextType;
  const navigate = useNavigate();

  const navigateToEmployeePortal = () => {
    navigate('/portal/admin/myself');
  };

  useEffect(() => {
    if (employee) {
      navigateToEmployeePortal();
    }
  }, [employee]);

  return (
    <div className='page'>
      <div className='page-container-center'>
        <h1>Company Portal</h1>
        <LoginForm />
      </div>
    </div>
  );
}
