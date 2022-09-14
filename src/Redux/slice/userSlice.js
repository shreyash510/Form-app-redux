import { createAction, createReducer } from "@reduxjs/toolkit";

export const addUser = createAction("add/user");
export const delUser = createAction("del/user");

const initialState = {
    data: [
        {
            name: "shreyash Kolhe",
            mobile: 9723927928
        },
        {
            name: "Vaibhav Bandal",
            mobile: 44444444444
        },
        {
            name: "shubham lenekar",
            mobile: 9870987928
        }
    ],
    loading: false,
    error: null
}

export const userSlice = createReducer(initialState,
    {
        [addUser]: (state, action) => {
            state.data = [
                ...state.data,
                action.payload
            ]
        },

        [delUser]: (state, action) => {
            const temp = state.data.filter((value, index) => index !== action.payload);
            state.data = temp
            
        }
    })
