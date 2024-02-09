// adminPortalSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { userProfileData } from '../../../constants/data';
import { registerUser } from './adminThunk';

// Slice definition
const adminPortalSlice = createSlice({
    name: 'userData',
    initialState: {
        userData: userProfileData,
        loading: false,
        error: null,
    },
    reducers: {
        // This reducer is kept for compatibility, but it will call the registerOrAddUser thunk
        addUser: (state, action) => {
            // Here, action.payload should contain { email, password }
            // Dispatch registerUser thunk with the payload
            registerUser(action.payload);
        },
        updateUser: (state, action) => {
            state.userData = action.payload;
        },
        deleteUser: (state, action) => {
            state.userData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export const { addUser, updateUser, deleteUser } = adminPortalSlice.actions;
export default adminPortalSlice.reducer;
