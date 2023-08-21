import MainPage from "../../Pages/MainPage";
import MyAbout from "../../Pages/MyAbout";
import MyComplitedTaskPage from "../../Pages/MyComplitedTaskPage";
import MyLoginPage from "../../Pages/MyLoginPage";
import MyRegPage from "../../Pages/MyRegPage";
 
export const ArrRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/About", component: MyAbout, exact: true },
  { path: "/Complited", component: MyComplitedTaskPage, exact: true },
];

export const beforeLoginRoutes = [
  { path: "/Reg", component: MyRegPage, exact: true },
  { path: "/Login", component: MyLoginPage, exact: true },
];


