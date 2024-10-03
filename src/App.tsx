import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { MainPage } from './pages/main';
import { RegisterPage } from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/main',
    element: <MainPage />
  }
]);

export const App = () => <RouterProvider router={router} />;
