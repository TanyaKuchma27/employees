import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchEmployees } from "./operations";

const employeesAdapter = createEntityAdapter({
    selectId: (employee) => employee.id,
    sortComparer: (a, b) => a.firstName.localeCompare(b.firstName)
});

export const getEmployees = employeesAdapter.getSelectors((state) => state.employees);

const employeesSlice = createSlice({
    name: "employees",
    initialState: employeesAdapter.getInitialState({ isLoading: false, error: null }),
    reducers: {},
    extraReducers: {
        [fetchEmployees.pending](state) {
            state.isLoading = true;
        },
        [fetchEmployees.fulfilled](state, { payload }) {
            state.isLoading = false;      
            employeesAdapter.setAll(state, payload);
        },
        [fetchEmployees.rejected](state, action) {
            state.isLoading = false;
            state.error = action.error.message
        },
    },
});

export const employeesReducer = employeesSlice.reducer;