import React, { useContext, useState } from "react";
import style from "../Pages/MainPage.module.css";
import MyTasksPage from "./MyTasksPage";
import { ArrCompletedTasks } from "../components/context";



const MainPage = () => {
  const [tasksList, setTask] = useState([]);
  const [ArrCompletedTask, setCompletedTask] = useContext(ArrCompletedTasks);
  
  
  const addNewTask = (newTask) => {
    setTask([...tasksList, newTask]);  
  };
  const completedTask = (remTask) => {
    setTask(tasksList.filter((t) => t !== remTask));
    setCompletedTask([...ArrCompletedTask, remTask]);
  };
console.log(ArrCompletedTask)
  const editTask = (task, value) => {
    if(!value) return;
    setTask(tasksList.map(t => t.id === task.id ? {...t, title: value} : t));
  }

  return (
    <div className={style.main_page}>
        <MyTasksPage  tasksList={tasksList}  addNewTask={addNewTask} completedTask={completedTask} editTask={editTask} />
    </div>
  );
};

export default MainPage;
