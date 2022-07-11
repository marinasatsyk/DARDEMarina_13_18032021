import { configureStore } from '@reduxjs/toolkit';
import GetUserReducer from '../features/UserSlice';
export const store = configureStore({
    reducer: {
        user: GetUserReducer,
    },
});
