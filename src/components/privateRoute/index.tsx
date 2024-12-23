import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '@store/baseHooks';

interface PrivaterouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivaterouteProps> = ({ children }) => {
  const user = useTypedSelector((state) => state.user);
  if (user.token) {
    return children;
  }
  return <Navigate to='/login' replace />;
};
