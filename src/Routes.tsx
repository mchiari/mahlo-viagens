import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CoverPage from "./pages/CoverPage";
import HomePage from "./pages/HomePage";
// import HomePage from "./pages/CoverPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <CoverPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);