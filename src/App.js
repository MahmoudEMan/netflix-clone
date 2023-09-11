import React from "react";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import { PhotoProvider } from "react-photo-view";

import "./App.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "react-photo-view/dist/react-photo-view.css";
import "react-circular-progressbar/dist/styles.css";

//pages

import RootLayout from "pages/Root.js";
import HomeScreen from "pages/homescreen";
import DetailsPage from "pages/detailsPage";
import ActorDetails from "pages/actorPage";
import SearchPage from "pages/searchPage";
import ShowsPage from "pages/ShowsPage";

////login page
import LoginScreen from "pages/loginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      { path: "explore/:type/:category", element: <ShowsPage /> },
      { path: "details/:type/:id", element: <DetailsPage /> },
      { path: "actor/:id", element: <ActorDetails /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return (
    <PhotoProvider photoClosable>
      <RouterProvider router={router} />
    </PhotoProvider>
  );
}

export default App;
