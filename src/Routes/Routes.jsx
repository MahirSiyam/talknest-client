import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import FindTutors from "../Pages/FindTutors";
import AddTutors from "../Pages/AddTutors";
import MyTutors from "../Pages/MyTutors";
import MyBookedTutors from "../Pages/MyBookedTutors";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../Provider/PrivateRoute";
import TutorsDetails from "../Components/TutorsDetails";
import axios from "axios";
import UpdatePage from "../Pages/UpdatePage";

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
        loader: () => axios(`http://localhost:3000/tutorials`),
      },
      {
        path: "/addTutors",
        element: <PrivateRoute>
          <AddTutors></AddTutors>
        </PrivateRoute>,
      },
      {
        path: "/myTutors",
        element: <PrivateRoute>
          <MyTutors></MyTutors>
        </PrivateRoute>,
      },
      {
        path: "/myBookedTutors",
        element: <PrivateRoute>
          <MyBookedTutors></MyBookedTutors>
        </PrivateRoute>,
      },
      {
        path: "/tutorsDetails/:id",
        element: <PrivateRoute>
          <TutorsDetails></TutorsDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/tutorials/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <UpdatePage></UpdatePage>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/tutorials/${params.id}`),
      },
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
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
