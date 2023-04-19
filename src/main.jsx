import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutMain from './Components/LayoutMain';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import AuthProviders from './Provider/AuthProviders';
import Orders from './Components/Orders';
import PrivetRoute from './route/PrivetRoute';
import Profile from './Components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element:<LayoutMain></LayoutMain>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/order",
        element:<PrivetRoute><Orders></Orders></PrivetRoute>
      },
      {
        path:"/profile",
        element:<PrivetRoute><Profile></Profile></PrivetRoute>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
