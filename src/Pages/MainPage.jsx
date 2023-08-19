import React, { useState, useRef } from "react";
import style from "../Pages/MainPage.module.css";
import MyTaskForm from "../components/MyTaskForm";
import MyTaskList from "../components/MyTaskList";

const MainPage = () => {
  const [tasksList, setTask] = useState([]);
  
  const addNewTask = (newTask) => {
    setTask([...tasksList, newTask]);  
  };
  const removeTask = (remTask) => {
    setTask(tasksList.filter((t) => t !== remTask));
  };

  const editTask = (task, value) => {
    if(!value) return;
    setTask(tasksList.map(t => t.id === task.id ? {...t, title: value} : t));
  }

  return (
    <div className={style.main_page}>
      <h1>Test ToDo List on React</h1>
      <MyTaskForm addNewTask={addNewTask}/>
      <MyTaskList tasksList={tasksList} removeTask={removeTask} editTask={editTask}/>
    </div>
  );
};

export default MainPage;
