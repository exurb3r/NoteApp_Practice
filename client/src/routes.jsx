import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
]);

