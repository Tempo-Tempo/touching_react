import React from "react";


const MyButton = ({children, ...props}) => {
   return (
      <button {...props} className="bg-black font-bold p-2 text-white rounded-md hover:bg-gray-900">{children}</button>
   )
}

export default MyButton;