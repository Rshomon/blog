import Index from "../pages/Index/index";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Test from "../Test/Test";
import Head from "../components/Head/Head";
import Item from "../components/ItemData/ItemData";
import CollapseCom from "../components/Collapse/Collapse";
// import About from "../pages/About/About";
import ComponentTest from "../components/ComponentTest/ComponentTest";

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
  {
    path: "/item",
    component: Item,
  },
  {
    path: "/test1",
    component: ComponentTest,
  },
  {
    path: "/Collapse",
    component: CollapseCom,
  },
];
