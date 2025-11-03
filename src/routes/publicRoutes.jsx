// Public Pages
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import About from "../pages/public/About";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
    restricted: true, // Redirects to dashboard if already logged in
  },
];
