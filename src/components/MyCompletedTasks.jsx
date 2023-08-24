import React from "react";
import { ArrCompletedTasks } from "./context";
import MyButton from "../UI/MyButton/MyButton";
import { useSelector } from "react-redux";

const MyComplitedTasks = () => {
   const [ArrCompletedTask, setCompletedTask] = React.useContext(ArrCompletedTasks);

  //  const dispatch = useDispatch();

   const testArr = useSelector(state => state.completed.completedTasks)

  console.log(testArr)

   const removeTask = (remTask) => {
      setCompletedTask(ArrCompletedTask.filter((t) => t !== remTask));
   }

  return (
    <div className="wrapper_task_completed">
      <h1>Completed tasks list</h1>
      <div className="main_wrapper_completed">
        {testArr.length ? (
          <div className="task_list_completed_title">
            <div>Завершенные задачи: </div>
            {testArr.map((t) => (
              <div key={t.title} className="task">
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
