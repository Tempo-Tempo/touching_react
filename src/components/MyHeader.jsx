import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isAuthContext } from "./context";
import MyButton from "../UI/MyButton/MyButton";


const MyHeader = () => {
  const MyAuthContext = useContext(isAuthContext);
  const logout = MyAuthContext.logout;
  
  return (
    <div className="wrapper_header">
      {MyAuthContext.isAuth ? (
        <div className="links_nav">
          <div>
            <Link className="link" to="/About">
              О сайте
            </Link>
            <Link className="link" to="/">
              Задачи
            </Link>
            <Link className="link" to="/Complited">
              Завершенные задачи
            </Link>
          </div>
          <div>
          <span className="email_user">{MyAuthContext.authUser.email}</span>
            <MyButton onClick={logout}> Выйти</MyButton>
          </div>
        </div>
      ) : (
        <div>
          <Link className="link" to="/Login">
            Войти
          </Link>
          <Link className="link" to="/Reg">
            Регистрация
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyHeader;
