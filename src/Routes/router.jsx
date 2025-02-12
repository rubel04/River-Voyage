import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../COMPONENTS/ErrorPage";
import Home from "../COMPONENTS/Home";
import AdventureDetails from "../COMPONENTS/AdventureDetails";
import UpdateProfile from "../COMPONENTS/UpdateProfile";
import Login from "../COMPONENTS/Login";
import Register from "../COMPONENTS/Register";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../COMPONENTS/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adventure/details/:id",
        element: (
          <PrivateRoute>
            <AdventureDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/adventures.json");
          const data = await res.json();
          const targetAdventure = data.find(
            (adventure) => adventure.id == params.id
          );
          return targetAdventure;
        },
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
