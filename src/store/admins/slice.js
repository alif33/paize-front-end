
import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: "admins",
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
                auth: action.payload
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
