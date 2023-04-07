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
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Cards/>
      },
      {
        path:"shop",
        element:<Cards/>
      },
      {
        path:"/orders",
        element:<Orders/>,
        loader: CardProductLoader
      },
      {
        path:"/Inventory",
        element:<Inventory/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
