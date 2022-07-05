import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/AuthSlice/LogIn';
import GetUserReducer from '../features/UserSlice';
export const store = configureStore({
    reducer: {
        login: LoginReducer,
        user: GetUserReducer,
    },
});
