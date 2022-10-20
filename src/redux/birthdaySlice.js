import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const birthdayAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.lastName.localeCompare(b.lastName)
});

export const getBirthday = birthdayAdapter.getSelectors((state) => state.birthday);

const birthdaySlice = createSlice({
    name: "birthday",
    initialState: birthdayAdapter.getInitialState(),
    reducers: {
        addBirthday: birthdayAdapter.addOne,
        deleteBirthday: birthdayAdapter.removeOne,
    },
    extraReducers: {},
});

const persistConfig = {
    key: 'birthday',
    storage  
};

export const birthdayReducer = persistReducer(persistConfig, birthdaySlice.reducer);

export const { addBirthday } = birthdaySlice.actions;
export const { deleteBirthday } = birthdaySlice.actions;