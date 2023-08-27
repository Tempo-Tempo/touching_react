import { createSlice } from "@reduxjs/toolkit";

const tasksListSlice = createSlice({
  name: "tasksListSlice",
  initialState: {
    tasksList: [],
  },
  reducers: {
    addNewTaskSlice(state, action) {
      state.tasksList = [...state.tasksList, action.payload];
    },
    removeTaskSlice(state, action) {
      state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id);
    },
    editTaskSlice(state, action) {
      state.tasksList = state.tasksList.map((task) => task.id === action.payload.task.id ? {...task, title: action.payload.value} : task)
    }
  },
});
export const { addNewTaskSlice, removeTaskSlice, editTaskSlice } = tasksListSlice.actions;
export default tasksListSlice.reducer;
