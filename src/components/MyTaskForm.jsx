import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const MyTaskForm = ({ addNewTask }) => {
  const [task, setTask] = useState({ title: "", id: 0 });

  const createTask = (e) => {
    e.preventDefault();
    setTask({...task, id: task.id+= 1});
    let newTask = task;
    if (!newTask.title) return;
    addNewTask(newTask);
    console.log(newTask)
    setTask({title: '', id: task.id})
  };

  return (
    <form onSubmit={createTask} className="task_input">
      <MyInput
        value={task.title}
        onChange={(e) => setTask({ title: e.target.value, id: task.id })}
        placeholder="Введите задачу..."
      />
      <MyButton>Добавить</MyButton>
    </form>
  );
};
export default MyTaskForm;
