import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Test from "../Test/Test";
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
];
