import { configureStore } from "@reduxjs/toolkit";
import CompletedTasksSlice from "./CompletedTasksSlice";
export default configureStore ({
   reducer: {
      completed: CompletedTasksSlice,
   }
})