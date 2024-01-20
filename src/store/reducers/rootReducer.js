import { combineReducers } from '@reduxjs/toolkit';
import todoListsReducer from './todoList/todoListsSlice';

const rootReducer = combineReducers({
    todos: todoListsReducer,
    
});

export default rootReducer;