import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { DocumentationPage } from './pages/documentation';
import { LoginPage } from './pages/login';
import { MainPage } from './pages/main';
import { RegisterPage } from './pages/register';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/documentation',
    element: <DocumentationPage />
  }
]);

export const App = () => <RouterProvider router={router} />;
