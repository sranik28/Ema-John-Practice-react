import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Cards from './componentes/Cards/Cards';
import Orders from './Pages/Orders';
import Inventory from './Pages/Inventory';
import Login from './Pages/Login';
import CardProductLoader from './componentes/CardProductLoder/CardProductLoder';
import CheckOut from './componentes/CheckOut/CheckOut';
import SignUp from './Pages/SignUp';
import { AuthProvider } from './Context/Context';
import PrivetRout from './PrivetRoute/PrivetRout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Cards />,
        loader: () => fetch('http://localhost:5000/totalProducts')
      },
      {
        path: "shop",
        element: <Cards />
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: CardProductLoader
      },
      {
        path: "/inventory",
        element: <PrivetRout><Inventory /></PrivetRout>
      },
      {
        path: "/checkOut",
        element: <PrivetRout><CheckOut /></PrivetRout>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
