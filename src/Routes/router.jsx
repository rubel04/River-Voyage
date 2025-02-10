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
            loader: async({params}) => {
              const res = await fetch('/adventures.json');
              const data = await res.json();
              const targetAdventure = data.find(adventure => adventure.id == params.id);
              return targetAdventure;
            }
        }
      ]
    }
  ])

  export default router