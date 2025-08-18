// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Pages = lazy(() => import("@/pages/Pages"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Shop = lazy(() => import("../pages/Shop"));
const Products = lazy(() => import("../pages/Products"));
const Signin = lazy(() => import("../pages/Signin"));
const Signup = lazy(() => import("../pages/Signup"));

// 

export const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]
);
