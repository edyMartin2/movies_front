import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import { Home } from './views/Home';
import { Add } from './views/Add'
import { Update } from './views/Update';
import { Admin } from './views/Admin';
import { Comments } from './views/Comments';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/add",
    element: <Add></Add>
  },
  {
    path: "/update/:id",
    element: <Update></Update>
  },
  {
    path: "/admin",
    element: <Admin></Admin>
  },
  {
    path: "/more/:id",
    element: <Comments></Comments>
  }
]);


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;