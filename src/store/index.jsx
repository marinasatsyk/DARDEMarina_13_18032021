import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/AuthSlice/LogIn';
export const store = configureStore({
    reducer: {
        login: LoginReducer,
    },
});
