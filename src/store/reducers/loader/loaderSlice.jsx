import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
    },
    reducers: {
        updateLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

const { reducer } = loaderSlice;
const selectorLoader = (state) => state.loader;
const { updateLoading } = loaderSlice.actions;
export { updateLoading, selectorLoader };

export default reducer;