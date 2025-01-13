import Profile from "../features/profile/pages/Profile";
import Home from "../features/home/pages/Home";
import AppLayout from "../shared/pages/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";

import Setting from "../features/setting/pages/Setting";
import Login from "../features/authentication/pages/Login";
import Register from "../features/authentication/pages/Register";
import EditArticle from "../features/articles/pages/EditArticle";
import Article from "@/features/articles/pages/Article";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: paths.home.path,
          element: <Home />,
        },
        {
          path: paths.profile.path,
          element: <Profile />,
        },
        {
          path: paths.article.path,
          element: <Article />,
        },

        {
          path: paths.editArticle.path,
          element: <EditArticle />,
        },
        {
          path: paths.setting.path,
          element: <Setting />,
        },
        {
          path: paths.login.path,
          element: <Login />,
        },
        {
          path: paths.register.path,
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  profile: {
    path: "/profile/:id",
    getHref: (id: string) => `/profile/${id}`,
  },
  article: {
    path: "/article/:id",
    getHref: (id: string) => `/article/${id}`,
  },
  editArticle: {
    path: "/edit-article/:id?",
    getHref: (id?: string) => `/edit-article/${id ? id : ""}`,
  },
  setting: {
    path: "/setting",
    getHref: () => "/setting",
  },
  login: {
    path: "/login",
    getHref: () => "/login",
  },
  register: {
    path: "/register",
    getHref: () => "/register",
  },
};
