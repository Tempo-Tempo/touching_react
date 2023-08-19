import MainPage from "../../Pages/MainPage"
import MyAbout from "../../Pages/MyAbout"
import MyComplitedTaskPage from "../../Pages/MyComplitedTaskPage"


const ArrRoutes = [
   {path: "/", component: MainPage, exact: true},
   {path: "/About", component: MyAbout, exact: true},
   {path: "/Complited", component: MyComplitedTaskPage, exact: true},
]

export default ArrRoutes;