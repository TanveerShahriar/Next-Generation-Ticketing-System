import React from 'react';
import './App.css';
import Login from "./Components/auth/login";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/navbar/footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Backbone from "./Components/Backbone";
import Signup from "./Components/auth/signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Backbone />,
        children: [
            { path: "/home", element: <Login/> },
            { path: "/login", element: <Login/> },
            { path: "/signup", element: <Signup/> },
        ],
    },
]);

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
