import React, { useState } from "react";
import "../app.css";

import MyRow from "./MyRowTask";

const MyTaskList = ({ tasksList, removeTask, editTask }) => {
  console.log(tasksList)
  return (
    <div className="wrapper_task_list">
      {tasksList.length ? (
        <div className="tasks_list">
          <div className="task_list_title">Список задач: </div>
          {tasksList.map((todo) => (
            <MyRow
              removeTask={() => removeTask(todo)}
              onChange={(value) =>
                tasksList.map((entry) =>
                  entry.id === todo.id ? editTask(entry, value) : entry
                )
              }
              value={todo.title}
              key={todo.id}
            />
          ))}
        </div>
      ) : (
        <div className="task_list_title">Список задач пуст :( </div>
      )}
    </div>
  );
};
export default MyTaskList;
