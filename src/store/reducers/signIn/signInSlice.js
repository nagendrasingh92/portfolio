import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currentUserData: [],
};

const signInSlice = createSlice({
    name: 'currentUserData',
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.currentUserData = action.payload
        },
        deleteCurrentUser: (state, action) => {
            state.currentUserData = action.payload
        },
    },
});

export const { currentUser, deleteCurrentUser } = signInSlice.actions;

export default signInSlice.reducer;
