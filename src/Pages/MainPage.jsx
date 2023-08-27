import React, { useState } from "react";
import style from "../Pages/MainPage.module.css";
import MyTasksPage from "./MyTasksPage";
import { addTask } from "../components/store/CompletedTasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { addNewTaskSlice, editTaskSlice, removeTaskSlice } from "../components/store/TasksListSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasksList.tasksList);
 

  const addNewTask = (newTask) => {
    dispatch(addNewTaskSlice(newTask));
  };
  const completedTask = (remTask) => {
   dispatch(removeTaskSlice(remTask));
    dispatch(addTask(remTask));
  };
  const editingTask = (task, value) => {
    if (!value) return;
    const editTask = {
      task: task,
      value: value,
    }
    dispatch(editTaskSlice(editTask))
  };

  return (
    <div className={style.main_page}>
      <MyTasksPage
        tasksList={tasksList}
        addNewTask={addNewTask}
        completedTask={completedTask}
        editTask={editingTask}
      />
    </div>
  );
};

export default MainPage;
