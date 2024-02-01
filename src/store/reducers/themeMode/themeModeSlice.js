import { createSlice } from "@reduxjs/toolkit";

export const themeModeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'default',
    },
    reducers: {
        setThemeMode: (state, action) => {
            state.mode = action.payload;
        },
    },
});
export const { setThemeMode } = themeModeSlice.actions;
// export const selectThemeMode = (state) => state.themeMode.mode;
export default themeModeSlice.reducer;