import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Arrivals from "./pages/Arrivals";
import Brands from "./pages/Brands";
import Log from "./pages/Log";
export const HomeRoute = {
  path: "/",
  element: <Home />,
  title: "Home",
};

export const ShopRoute = {
  path: "/shop",
  element: <Shop />,
  title: "Shop",
};

export const SaleRoute = {
  path: "/sale",
  element: <Sale />,
  title: "Sale",
};

export const ArrivalsRoute = {
  path: "/arrivals",
  element: <Arrivals />,
  title: "Arrivals",
};

export const BrandsRoute = {
  path: "/brands",
  element: <Brands />,
  title: "Brands",
};

export const LogRoute = {
  path: "/log",
  element: <Log />,
  title: "Log",
};

export const ROUTES = [
  HomeRoute,
  ShopRoute,
  SaleRoute,
  ArrivalsRoute,
  BrandsRoute,
  LogRoute,
];
