import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home/Home"
import About from "../pages/About/About";
import AllProducts from "../pages/AllProducts/AllProducts";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'all-products',
          element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'registration',
          element: <Registration></Registration>
        },
    ]
    },
  ]);