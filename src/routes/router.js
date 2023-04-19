import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashbord from '../Layout/Dashbord/Dashbord';
import Main from '../Layout/Main/Main';
import Home from '../pages/Main/Home';
import AddContent from './../pages/Dashbord/AddContent';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashbord></Dashbord>,
        children: [
        //   {
        //     path: "/dashboard",
        //     element: <ProductList />,
        //   },
          {
            path: "add-product",
            element: <AddContent></AddContent>,
          },
        ],
      },
]);

export default router;