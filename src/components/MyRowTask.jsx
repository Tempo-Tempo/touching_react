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
    <div>
      <div className="task">
        {isEditing ? (
          <MyInput
            style={{ width: "60%" }}
            defaultValue={value}
            ref={inputRef}
          />
        ) : (
          <span className="task_title">
           {value}
          </span>
        )}
        <div className="btn_task">
          <MyButton onClick={completedTask}>Завершить</MyButton>
          <MyButton onClick={onToggleEdit}>
            {isEditing ? "Сохранить" : "Изменить"}
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default MyRow;
