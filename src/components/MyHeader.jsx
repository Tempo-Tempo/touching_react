import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isAuthContext } from "./context";
import MyButton from "../UI/MyButton/MyButton";


const MyHeader = () => {
  const MyAuthContext = useContext(isAuthContext);
  const logout = MyAuthContext.logout;
  
  return (
    <div className="w-full h-12 flex font-bold bg-purple-500 border-b-2 border-black">
      {MyAuthContext.isAuth ? (
        <div className="flex justify-between w-full items-center">
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
          <span className="text-white border-2 pt-2 pb-2 pl-2 rounded-md border-black">{MyAuthContext.authUser.email} <MyButton onClick={logout}> Выйти</MyButton></span>
            
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center">
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
