import React, { useState, useContext } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { isAuthContext } from "../components/context";


const MyRegPage = () => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const MyAuthContext = useContext(isAuthContext);
   const login = MyAuthContext.login;
 
  
   
   const handleSingUp = (email, pass, e) => {
      e.preventDefault();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pass).then((newUser) => {
         const user = newUser.user;
         console.log(user)
         login();
         setEmail('');
         setPass('');
      }).catch(console.error)
   }

   return (
      <div className="reg_wrapper">
     <h1 style={{marginTop: 20}} className="text-3xl font-bold">Sing up for to continue :)</h1>
          <form onSubmit={(e) => handleSingUp(email, pass, e)} className="reg_form">
         <MyInput style={{marginBottom: 15}} type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder={"Задайте логин..."}/>
         <MyInput style={{marginBottom: 10}} onChange={(e) => setPass(e.target.value)}  value={pass} placeholder={"Задайте пароль..."}/>
         <MyButton style={{marginTop: 10}} >Зарегистрироваться</MyButton>
      </form>
      </div>
     
   )
}
export default MyRegPage;