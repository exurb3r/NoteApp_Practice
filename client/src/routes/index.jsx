import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import MainLayout from "../layouts/MainLayout";

import PersonalNotes from "../pages/PersonalNotes";
import CommunityNotes from "../pages/CommunityNotes";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import Stats_Activity from "../pages/Stats_Activity";

// Protects all routes below it.
const ProtectedRoute = () => {
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export const router = createBrowserRouter([
  // ---------- Public Routes ----------
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  // ---------- Protected Routes ----------
  {
    element: <ProtectedRoute />, // Authentication guard

    children: [
      {
        path: "/noteapp",
        element: <MainLayout />, // Shared layout (Navbar + Sidebar + Outlet)

        children: [
          {
            index: true, // Default page: /noteapp
            element: <PersonalNotes />,
          },
          {
            path: "community-notes",
            element: <CommunityNotes />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "stats-activities",
            element: <Stats_Activity />,
          },
        ],
      },
    ],
  },

  // ---------- Fallback ----------
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);