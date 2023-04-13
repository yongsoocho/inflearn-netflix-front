import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LoginPage } from "./login.page";
import { SignupPage } from "./signup.page";
import { BrowsePage } from "./browse.page";
import { ManagePage } from "./manage.page";
import { MoviePage } from "./movie.page";
import { MyListPage } from "./myList.page";
import { SearchPage } from "./search.page";
import { RedirectPage } from "./redirect.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/browse",
        element: <BrowsePage />,
      },
      {
        path: "/manageProfile/:profileId",
        element: <ManagePage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "/my-list",
        element: <MyListPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/redirect",
        element: <RedirectPage />,
      },
    ],
  },
]);
