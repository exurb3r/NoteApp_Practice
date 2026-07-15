
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/PersonalNotes'; 
import MainLayout from '../layouts/MainLayout'; 
import MainPage from '../pages/PersonalNotes';


const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  // If authenticated, render the child pages. If not, redirect to login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};


export const router = createBrowserRouter([
  // --- PUBLIC ROUTES ---
  {
    path: '/',
    element: <Navigate to="/login" replace />, // Redirect root to login automatically
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

  // --- PROTECTED ROUTES ---
  {
    element: <ProtectedRoute />, // 1st Layer Guard: Checks if logged in
    children: [
      {
        element: <MainLayout />, // 2nd Layer Layout: Applies Navbar/Sidebar
        children: [
          {
            path: '/noteapp', 
            element: <MainPage />,
          },
          
          // { path: '/profile', element: <Profile /> }
        ],
      },
    ],
  },

  // --- FALLBACK ROUTE ---
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);