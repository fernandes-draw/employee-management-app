import { Outlet } from 'react-router-dom';
import './LayoutPage.css';

export default function LayoutPage() {
  return (
    <div className='layout-page page'>
      <>Layout Page</>
      <Outlet />
    </div>
  );
}
