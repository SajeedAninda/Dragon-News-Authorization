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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  }, 
  {
    path: "newsCategory/:id",
    loader: ()=>fetch("/news.json"),
    element: <NewsDetails></NewsDetails>,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
