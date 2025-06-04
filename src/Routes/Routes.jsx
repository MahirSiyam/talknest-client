import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import FindTutors from "../Pages/FindTutors";
import AddTutors from "../Pages/AddTutors";
import MyTutors from "../Pages/MyTutors";
import MyBookedTutors from "../Pages/MyBookedTutors";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/findTutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/addTutors",
        element: <AddTutors></AddTutors>,
      },
      {
        path: "/myTutors",
        element: <MyTutors></MyTutors>,
      },
      {
        path: "/myBookedTutors",
        element: <MyBookedTutors></MyBookedTutors>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
