import { Outlet } from 'react-router-dom';
import useGlobalContext, {
  type GlobalContextType,
} from '../services/GlobalContext';
import './LayoutPage.css';

export default function LayoutPage() {
  const { employee } = useGlobalContext() as GlobalContextType;

  return (
    <div className='layout-page page'>
      {employee && (
        <h1 style={{ marginTop: '1px' }}>
          {employee.firstName} {employee.lastName}
        </h1>
      )}
      <Outlet />
    </div>
  );
}
