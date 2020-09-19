import Index from "../pages/Index/index";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Test from "../Test/Test";
import Head from "../components/Head/Head"
// import About from "../pages/About/About";

export const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/head",
    component: Head,
  },
];
