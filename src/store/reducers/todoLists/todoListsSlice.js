// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoListsSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                complete: false,
            };
            state.todos.push(newTodo);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, updateTodo, deleteTodo } = todoListsSlice.actions;

export default todoListsSlice.reducer;
