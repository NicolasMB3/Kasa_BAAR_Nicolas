import React from 'react';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import About from '../Pages/About';

export default [
   {
      path: '*',
      element: <Error/>
   },
   {
      path: '/',
      element: <Home/>
   },
   {
      path: '/about',
      element: <About />
   },
]