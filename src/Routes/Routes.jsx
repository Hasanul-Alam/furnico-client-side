import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home/Home";
import About from "../pages/About/About";
import AllProducts from "../pages/AllProducts/AllProducts";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ProtectedRoute from "./ProtectedRoute";
import UserDashboard from "../pages/dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard/AdminDashboard";
import Purchase from "../pages/Purchase/Purchase";
import DahsboardLayout from "../Layout/DahsboardLayout";
import UserOrders from "../pages/dashboard/UserDashboard/UserOrders/UserOrders";
import AdminRoute from "./AdminRoute";
import ManageAllOrders from "../pages/dashboard/AdminDashboard/ManageAllOrders/ManageAllOrders";
import ManageAllUsers from "../pages/dashboard/AdminDashboard/ManageAllUsers/ManageAllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedRoute>
            <Login></Login>
          </ProtectedRoute>
        ),
      },
      {
        path: "registration",
        element: (
          <ProtectedRoute>
            <Registration></Registration>
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "purchase/:price",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DahsboardLayout></DahsboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "admin-dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "manage-all-orders",
        element: <ManageAllOrders></ManageAllOrders>
      },
      {
        path: "all-users",
        element: <ManageAllUsers></ManageAllUsers>
      },
      {
        path: "user-dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "my-orders",
        element: <UserOrders></UserOrders>,
      },
    ],
  },
]);
