import React from "react";
import { ArrCompletedTasks } from "./context";
import MyButton from "../UI/MyButton/MyButton";

const MyComplitedTasks = () => {
   const [ArrCompletedTask, setCompletedTask] = React.useContext(ArrCompletedTasks);

   const removeTask = (remTask) => {
      setCompletedTask(ArrCompletedTask.filter((t) => t !== remTask));
   }

  return (
    <div className="wrapper_task_completed">
      <h1>Completed tasks list</h1>
      <div className="main_wrapper_completed">
        {ArrCompletedTask.length ? (
          <div className="task_list_completed_title">
            <div>Завершенные задачи: </div>
            {ArrCompletedTask.map((t) => (
              <div className="task">
                <span className="task_title">{t.title}</span>
                <MyButton onClick={() => removeTask(t)}>Удалить</MyButton>
              </div>
            ))}
          </div>
        ) : (
          <div className="task_list_completed_title">
            Пока что нет завершенных задач :(
          </div>
        )}
      </div>
    </div>
  );
};

export default MyComplitedTasks;
