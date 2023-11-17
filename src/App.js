import React from 'react';
import routes from './Routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
      <RouterProvider router={createBrowserRouter(routes)}/>
  );
}

export default App;