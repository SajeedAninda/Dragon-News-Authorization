import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewsDetails from './NewsDetails.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import ErrorPage from '../ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage> 
  },
  {
    path: "newsCategory/:id",
    loader: () => fetch("/news.json"),
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
