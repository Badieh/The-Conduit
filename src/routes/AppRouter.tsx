import Profile from "../features/profile/pages/Profile";
import Home from "../features/home/pages/Home";
import AppLayout from "../shared/pages/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Article from "../features/articles/pages/Article";
import Setting from "../features/setting/pages/Setting";
import Login from "../features/authentication/pages/Login";
import Register from "../features/authentication/pages/Register";
import EditArticle from "../features/articles/pages/EditArticle";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: routes.Profile,
          element: <Profile />,
        },
        {
          path: routes.Article,
          element: <Article />,
        },
        {
          path: routes.EditArticle,
          element: <EditArticle />,
        },
        {
          path: routes.Setting,
          element: <Setting />,
        },
        {
          path: routes.Login,
          element: <Login />,
        },
        {
          path: routes.Register,
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

enum routes {
  Home = "/",
  Profile = "Profile/:id",
  Article = "Article/:id",
  EditArticle = "EditArticle/:id",
  Setting = "Setting",
  Login = "Login",
  Register = "Register",
}
