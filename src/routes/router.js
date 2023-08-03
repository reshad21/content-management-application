import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashbord from '../Layout/Dashbord/Dashbord';
import Main from '../Layout/Main/Main';
import ContentDetails from '../pages/Dashbord/ContentDetails';
import ProductList from '../pages/Dashbord/ProductList';
import UpdateContent from '../pages/Dashbord/UpdateContent';
import AriticleDetails from '../pages/Main/AriticleDetails';
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
      {
        path: "/article-details/:id",
        element: <AriticleDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashbord></Dashbord>,
    children: [
      {
        path: "/dashboard",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddContent></AddContent>,
      },
      {
        path: '/dashboard/content/:id',
        element: <ContentDetails></ContentDetails>,
      },
      {
        path: '/dashboard/updateContent/:id',
        element: <UpdateContent></UpdateContent>,
      }
    ],
  },
]);

export default router;