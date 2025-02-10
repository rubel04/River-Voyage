import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../COMPONENTS/ErrorPage";
import Home from "../COMPONENTS/Home";
import AdventureDetails from "../COMPONENTS/AdventureDetails";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
            path: '/adventure/details/:id',
            element: <AdventureDetails></AdventureDetails>,
        }
      ]
    }
  ])

  export default router