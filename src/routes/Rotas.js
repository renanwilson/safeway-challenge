import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Carts } from "../pages/Cart/Cart";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Carts />} path="/seila" />
      </Routes>
    </BrowserRouter>
  );
};
