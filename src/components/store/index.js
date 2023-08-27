import { configureStore } from "@reduxjs/toolkit";
import CompletedTasksSlice from "./CompletedTasksSlice";
import TasksListSlice from "./TasksListSlice";
export default configureStore ({
   reducer: {
      completed: CompletedTasksSlice,
      tasksList: TasksListSlice,
   }
})