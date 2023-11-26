import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Components/auth/login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Backbone from "./Components/Backbone";
import Signup from "./Components/auth/signup";
import {UserToken} from "./Token/UserToken";
import Homepage from "./Components/Homepage/Homepage";
import Cookies from "js-cookie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Backbone/>,
        children: [
            { path: "/", element: <Homepage/> },
            { path: "/home", element: <Homepage/> },
            { path: "/login", element: <Login/> },
            { path: "/signup", element: <Signup/> },
        ],
    },
]);

function App() {

    const [authorised, setAuthorised] = useState(() => Cookies.get('authorised') || 'false');
    const [userId, setUserId] = useState(() => Cookies.get('userId') || "");
    const [userType, setUserType] = useState(() => Cookies.get('userType') || "");

    useEffect(() => {
        Cookies.set('authorised', authorised);
        Cookies.set('userId', userId);
        Cookies.set('userType', userType);
    }, [authorised, userId, userType]);

  return (
      <UserToken.Provider value={{authorised, setAuthorised, userId, setUserId, userType, setUserType}}>
        <RouterProvider router={router}></RouterProvider>
      </UserToken.Provider>
  );
}

export default App;
