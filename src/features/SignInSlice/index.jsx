import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const SignInSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        openSignIn: (state, action) => {
            state.isOpen = true;
        },
        closeSignIn: (state, action) => {
            state.isOpen = false;
        },
    },
});

export const { openSignIn, closeSignIn } = SignInSlice.actions;
export default SignInSlice.reducer;
