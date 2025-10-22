import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
