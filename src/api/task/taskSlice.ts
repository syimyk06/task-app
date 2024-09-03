import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initData } from "@/api/task/initData";

export interface ITask {
  id: number;
  description: string;
  toggled: boolean;
}

const initialState: ITask[] = initData;

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ description: string }>) => {
      state.push({
        id: state.length + 1,
        description: action.payload.description,
        toggled: false,
      });
    },
    removeTask: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    toggleTask: (state, action: PayloadAction<{ id: number }>) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.toggled = !task.toggled;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
