import React from "react"
import MyTaskForm from "../components/MyTaskForm";
import MyTaskList from "../components/MyTaskList";



const MyTasksPage = ({tasksList, completedTask, editTask, addNewTask}) => {
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center text-white"}>
      <h1 style={{ color: "Black", margin: 15 } } className="text-3xl font-bold">Test ToDo List on React</h1>
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
