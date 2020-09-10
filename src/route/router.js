import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Admin from "../components/Admin/admin.jsx"

export const routes = [
  {
    path: "/",
    component: Admin,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/home",
    component: Home,
  },
];
