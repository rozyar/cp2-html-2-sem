import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditarProdutos from './routes/EditarProdutos/EditarProdutos.jsx';
import Home from './routes/Home/Home.jsx';
import Produtos from './routes/Produtos/Produtos.jsx';
import Error from './routes/Error/Error.jsx';

const router = createBrowserRouter([
  { path: '/' , element: <App/>,
    errorElement: <Error/>,
    children: [
      { path: '/' , element: <Home/>},
      { path: '/produtos' , element: <Produtos/>},
      { path: '/editar/produtos/:id' , element: <EditarProdutos/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
