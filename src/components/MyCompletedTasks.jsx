import React from "react";
import MyButton from "../UI/MyButton/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "./store/CompletedTasksSlice";

const MyComplitedTasks = () => {
  const ArrCompletedTask = useSelector(
    (state) => state.completed.completedTasks
  );
  const dispatch = useDispatch();
  const remove = (remTask) => {
    dispatch(removeTask(remTask));
  };

  return (
    <div className="wrapper_task_completed">
      <h1 className="text-3xl font-bold">Completed tasks list</h1>
      <div className="main_wrapper_completed">
        {ArrCompletedTask.length ? (
          <div className="task_list_completed_title">
            <div>Завершенные задачи: </div>
            {ArrCompletedTask.map((t) => (
              <div key={t.title} className="task">
                <span className="task_title">{t.title}</span>
                <MyButton onClick={() => remove(t)}>Удалить</MyButton>
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
