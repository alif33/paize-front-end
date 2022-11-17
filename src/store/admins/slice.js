
import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        auth: {
            token: "",
            email: "",
            isAdmin: false
        }
    },
    reducers: {

        LogedIn: (state, action) => {
            return {
                ...state,
                auth: {
                    ...action.payload,
                    isAdmin: true
                }
            }

        },

        LogOut: (state, action) => {
            return {
                ...state,
                auth: {
                    token: "",
                    email: null,
                    isAdmin: false
                }
            }
        }
    }
})
