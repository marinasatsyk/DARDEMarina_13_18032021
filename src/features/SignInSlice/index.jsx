import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    isSignIn: true,
    isSignUp: false,
};

const SignInSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        //authentification form
        openAuthForm: (state, action) => {
            state.isOpen = true;
        },
        closeAuthForm: (state, action) => {
            state.isOpen = false;
        },
        //content if auth form is signIn
        openSignIn: (state, action) => {
            state.isSignIn = true;
        },
        closeSignIn: (state, action) => {
            state.isSignIn = false;
        },
        //content if auth form is signUp

        openSignUp: (state, action) => {
            state.isSignUp = true;
        },
        closeSignUp: (state, action) => {
            state.isSignUp = false;
        },
    },
});

export const {
    openAuthForm,
    closeAuthForm,
    openSignIn,
    closeSignIn,
    openSignUp,
    closeSignUp,
} = SignInSlice.actions;
export default SignInSlice.reducer;
