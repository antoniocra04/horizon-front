import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ApiKeysPage } from './pages/apiKeys';
import { DocumentationPage } from './pages/documentation';
import { LoginPage } from './pages/login';
import { MainPage } from './pages/main';
import { ProfilePage } from './pages/profile';
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
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/api-keys',
    element: <ApiKeysPage />
  }
]);

export const App = () => <RouterProvider router={router} />;
