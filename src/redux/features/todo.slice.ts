/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id : string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  [x: string]: any;
  todo: TTodo[];
};

const initialState: TInitialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todo.push({ ...action.payload, isCompleted: false } as TTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      
      state.todo = state.todo.filter( (item) => {
        item.id  !== action.payload;
      }
      );
      // state.todo.push({
      //   isCompleted: true,
      //   title: "",
      //   description: ""
      // });
    },
    completeToggle: (state, action: PayloadAction<string>) => {
      console.log(state, action);
      // state.todo.push({
      //   isCompleted: true,
      // });
    },
  },
});

export const { addTodo, deleteTodo, completeToggle } = todoSlice.actions;

export default todoSlice.reducer;
