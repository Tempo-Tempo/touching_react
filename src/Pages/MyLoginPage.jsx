import React from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {isAuthContext} from "../components/context/index"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const MyLoginPage = () => {
   const [email, setEmail] = React.useState('');
   const [pass, setPass] = React.useState('');
   const [errorMes, setErrorMes] = React.useState(false);
   const MyAuthContext = React.useContext(isAuthContext);
   const login = MyAuthContext.login;



   const handleLogin = (email, pass, e) => {
      e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, pass).then((currentUser) => {
         const user = currentUser.user;
         login();
         MyAuthContext.setAuthUser(user);
         setEmail('');
         setPass('');
      }).catch(() => {
         setErrorMes(true);
      setTimeout(() => {
         setErrorMes(false);
      }, 3000);;
      })
   }
   

  
   return (
      <div className="reg_wrapper">
         <h1>Login for to continue :)</h1>
         <form onSubmit={(e) => handleLogin(email, pass, e)} className="reg_form">
         <MyInput style={{marginBottom: 15}} type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder={"Введите логин..."}/>
         <MyInput style={{marginBottom: 10}} type="password" onChange={(e) => setPass(e.target.value)}  value={pass} placeholder={"Введите пароль..."}/>
         <MyButton style={{marginTop: 10}}>Войти</MyButton>
         {errorMes ? <div className="error_mess">Неверные логин или пароль, повторите попытку</div> : 
         <span className="error_mess"></span>}
      </form>
      </div>
      
   )
}
export default MyLoginPage;