
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

        adminLogin: (state, action) => {
            return {
                ...state,
                auth: {
                    ...action.payload,
                    isAdmin: true
                }
            }

        },

        adminLogout: (state, action) => {
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
