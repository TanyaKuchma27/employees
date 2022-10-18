import { configureStore } from '@reduxjs/toolkit';
import { employeesReducer } from './emploeesSlice';

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
})