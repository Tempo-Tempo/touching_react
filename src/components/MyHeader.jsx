import React from "react";
import { Link } from "react-router-dom";


const MyHeader = () => {
   return (
      <div className="wrapper_header">
         <div className="links">
            <Link className="link" to="/About">О сайте</Link>
            <Link className="link" to="/">Задачи</Link>
            <Link className="link" to="/Complited">Завершенные задачи</Link>
         </div>
      </div>
   )
}

export default MyHeader;