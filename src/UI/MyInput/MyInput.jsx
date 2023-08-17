import React from "react";
import style from "./MyInput.module.css"

const MyInput = React.forwardRef((props, inputRef) => {
   return (
      <input className={style.my_input} {...props} ref={inputRef}/>
   )
})

export default MyInput; 