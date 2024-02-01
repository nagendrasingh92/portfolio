import { combineReducers } from '@reduxjs/toolkit';
import todoListsReducer from './todoLists/todoListsSlice';
import adminPortalReducer from './adminPortal/adminPortalSlice';
import signInReducer from './signIn/signInSlice';
import themeModeReducer from './themeMode/themeModeSlice';
const rootReducer = combineReducers({
    todos: todoListsReducer,
    userData: adminPortalReducer,
    currentUserData: signInReducer,
    themeMode: themeModeReducer
});

export default rootReducer;