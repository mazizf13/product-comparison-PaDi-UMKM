import { PrivateRoute } from "./PrivateRoute";
import AboutUs from "@/app/about-us/page";
import Contact from "@/app/contact/page";
import Help from "@/app/help/page";
import Login from "@/app/login/page";
import Media from "@/app/media/page";
import Beranda from "@/app/page";
import Shop from "@/app/shop/page";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: React.FC = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Beranda />
            </PrivateRoute>
          }
        />
        <Route
          path="/beranda"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Beranda />
            </PrivateRoute>
          }
        />
        <Route
          path="/about-us"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/help"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Help />
            </PrivateRoute>
          }
        />
        <Route
          path="/media"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Media />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Shop />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
