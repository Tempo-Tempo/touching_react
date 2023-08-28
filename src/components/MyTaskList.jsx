import React, { useState } from "react";
import "../app.css";

import MyRow from "./MyRowTask";

const MyTaskList = ({ tasksList, completedTask, editTask }) => {
  return (
    <div className={"w-1/2 h-full bg-purple-500 m-10 rounded-md border-2 border-black"}>
      {tasksList.length ? (
        <div className="flex-col flex justify-center items-center">
          <div className="text-2xl font-bold mt-3 mb-3">Список задач: </div>
          {tasksList.map((todo) => (
            <MyRow
            completedTask={() => completedTask(todo)}
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
        <div className="text-2xl font-bold mt-3 mb-3 flex justify-center items-center">Список задач пуст :( </div>
      )}
    </div>
  );
};
export default MyTaskList;
