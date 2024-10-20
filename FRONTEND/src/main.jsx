import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import GenixAuctionsHomePage from './Pages/HomePage/GenixAutionsHomePage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import SignUpPage from './Pages/SignUpPage/SignUpPage.jsx';
import SignUpSuccess from './Pages/SignUpPage/SignUpSuccess.jsx';
import ExplorePage from './Pages/HomePage/ExplorePage.jsx';
import DetailsPage from './Pages/DetailsPage/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
    children: [
      {
        index: true,
        element: <GenixAuctionsHomePage />,
       
      },
      {
        path: "home",
        element: <GenixAuctionsHomePage />,
       
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "signupsuccess",
        element: <SignUpSuccess />,
      },
      {
        path: "explorepage",
        element: <ExplorePage />,
      },
      {
        path: "details/:id",
        element: <DetailsPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
