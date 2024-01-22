// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {userProfileData} from '../../../constants/data';
const initialState = {
    userData: userProfileData,
};

const adminPortalSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload
        },
        updateUser: (state, action) => {
            state.userData = action.payload
        },
        deleteUser: (state, action) => {
            state.userData = action.payload
        },
    },
});

export const { addUser, updateUser, deleteUser } = adminPortalSlice.actions;

export default adminPortalSlice.reducer;
