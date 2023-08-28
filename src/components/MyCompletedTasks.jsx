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
    <div className="w-full flex justify-center items-center flex-col">
      <h1 style={{marginTop: 10}} className="text-3xl font-bold">Completed tasks list</h1>
      <div className="w-1/2 h-full bg-purple-500 m-5 rounded-md border-2 border-black">
  
        {ArrCompletedTask.length ? (
          <div className="flex flex-col w-full justify-center items-center">
                <div className="text-2xl font-bold mt-3 mb-3 flex text-white items-center justify-center">Завершенные задачи: </div>
            {ArrCompletedTask.map((t) => (
              <div key={t.title} className="w-11/12 bg-white flex p-2 rounded-md border-black border-2 mb-4">
                <span className="w-11/12 text-black p-2 font-bold">{t.title}</span>
                <MyButton onClick={() => remove(t)}>Удалить</MyButton>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-2xl font-bold mt-3 mb-3 flex text-white items-center justify-center">
            Пока что нет завершенных задач :(
          </div>
        )}
      </div>
    </div>
  );
};

export default MyComplitedTasks;
