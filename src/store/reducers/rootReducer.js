import { combineReducers } from '@reduxjs/toolkit';
import todoListsReducer from './todoLists/todoListsSlice';
import adminPortalReducer from './adminPortal/adminPortalSlice';
import signInReducer from './signIn/signInSlice';
const rootReducer = combineReducers({
    todos: todoListsReducer,
    userData: adminPortalReducer,
    currentUserData: signInReducer
});

export default rootReducer;