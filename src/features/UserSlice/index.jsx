import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLoading: false,
    error: '',
};
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserPending: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            state.error = '';
        },
        getUserFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        logout: (state) => {
            state.user = {};
        },
    },
});

export const { getUserPending, getUserSuccess, getUserFail, logout } =
    UserSlice.actions;
export default UserSlice.reducer;
