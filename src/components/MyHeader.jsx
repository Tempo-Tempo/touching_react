import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isAuthContext } from "./context";
import MyButton from "../UI/MyButton/MyButton";
import useAuth  from "./MyHooks/useAuth";

const MyHeader = () => {
  const [isAuth, setIsAuth] = useContext(isAuthContext);

  console.log(useAuth)

  return (
    <div className="wrapper_header">
      {isAuth ? (
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
            <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
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
