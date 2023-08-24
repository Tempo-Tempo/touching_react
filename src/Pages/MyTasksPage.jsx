import React from "react"
import MyTaskForm from "../components/MyTaskForm";
import MyTaskList from "../components/MyTaskList";
import style from "./MainPage.module.css"


const MyTasksPage = ({tasksList, completedTask, editTask, addNewTask}) => {
  return (
    <div className={style.main_page}>
      <h1 style={{ color: "Black" }}>Test ToDo List on React</h1>
      <MyTaskForm addNewTask={addNewTask} />
      <MyTaskList
        tasksList={tasksList}
        completedTask={completedTask}
        editTask={editTask}
      />
    
    </div>
  );
};

export default MyTasksPage;
