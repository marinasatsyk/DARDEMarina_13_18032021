import { configureStore } from '@reduxjs/toolkit';
import SignInReducer from '../features/SignInSlice';

export const store = configureStore({
    reducer: {
        login: SignInReducer,
    },
});
