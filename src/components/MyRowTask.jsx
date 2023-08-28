import React, { useCallback, useRef, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const MyRow = ({ value, onChange, completedTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();
  const onToggleEdit = useCallback(() => {
    if (!isEditing) return setIsEditing(true);
    onChange(inputRef.current.value);
    setIsEditing(false);
  }, [onChange, isEditing]);

  return (
    
      <div className="w-11/12 bg-white flex p-2 rounded-md border-black border-2 mb-4">
        {isEditing ? (
          <MyInput
            style={{ width: "91%", marginRight: 10 }}
            defaultValue={value}
            ref={inputRef}
          />
        ) : (
          <span className="w-11/12 text-black p-2 font-bold">
           {value}
          </span>
        )}
        <div className="flex w-1/3 justify-between">
          <MyButton onClick={completedTask}>Завершить</MyButton>
          <MyButton onClick={onToggleEdit}>
            {isEditing ? "Сохранить" : "Изменить"}
          </MyButton>
        </div>
      </div>
    
  );
};

export default MyRow;
