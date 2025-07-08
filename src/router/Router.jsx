import React from 'react'
import { createBrowserRouter } from 'react-router';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Cart from '../pages/cart/Cart';
import Layout from '../layout/Layout';
import Product from '../pages/product/Product';
import ErrorPage from '../pages/error/ErrorPage';



export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default Router