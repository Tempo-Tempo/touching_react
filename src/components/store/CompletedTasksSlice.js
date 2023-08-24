import { createSlice } from "@reduxjs/toolkit";


const taskCompletedSlice = createSlice({
   name: 'completedArr',
   initialState: {
      completedTasks: [],
   },
   reducers: {
      addTask(state, action) {
         console.log(state);
         console.log(action);
         state.completedTasks = [...state.completedTasks, action.payload];
      },
      removeTask() {},
   }
})

export const {addTask, removeTask} = taskCompletedSlice.actions;

export default taskCompletedSlice.reducer;