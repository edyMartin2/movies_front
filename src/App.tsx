import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import { Home } from './views/Home';
import { Add } from './views/Add'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/add",
    element: <Add></Add>
  },
]);


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;