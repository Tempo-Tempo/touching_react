import React from "react";

const MyInput = React.forwardRef((props, inputRef) => {
   return (
      <input className={"w-full border-2 text-black border-black p-2 rounded-md pl-5"} {...props} ref={inputRef}/>
   )
})

export default MyInput; 