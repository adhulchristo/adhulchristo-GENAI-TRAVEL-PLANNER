import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx";
import FoodRecommendation from "./create-trip/FoodRecommendation.jsx";
import HotelRecommendation from "./create-trip/HotelRecommendation.jsx";// Make sure this path is correct
import { GoogleOAuthProvider } from '@react-oauth/google'
import ActivitiesRecommendation from "./create-trip/ActivitiesRecommendation.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {

    path:"/HotelRecommendation",
    element:<HotelRecommendation/>

  },
  {

    path:"/FoodRecommendation",
    element: <FoodRecommendation/>

  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/ActivitesRecommendation",
    element: <ActivitiesRecommendation />,
  }
  // Uncomment or add more routes as needed
  // {
  //   path: "/RestaurantRecommendation",
  //   element: <RestaurantRecommendation />, // Ensure this component exists
  // },
  // {
  //   path: "/Activities",
  //   element: <Activities />, // Ensure this component exists
  // },
  // {
  //   path: "/Transport",
  //   element: <Transport />, // Ensure this component exists
  // },
  // {
  //   path: "/Budget",
  //   element: <Budget />, // Ensure this component exists
  // },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Correct usage of createRoot

root.render(
  <StrictMode>

<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header /> {/* Ensure Header is included in the render method */}

    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
