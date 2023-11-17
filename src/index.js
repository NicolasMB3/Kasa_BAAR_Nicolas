import React from 'react';
import ReactDOM from 'react-dom/client';

import routes from './Routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Style from './Utils/Style'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Style>
    <RouterProvider router={createBrowserRouter(routes)}/>
  </Style>
);
