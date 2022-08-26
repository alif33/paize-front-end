import { createSlice } from '@reduxjs/toolkit';
import { authorInfo } from '../../__lib__/config';



export const userSlice = createSlice({
    name: "users",
    initialState: {
        ...authorInfo,
        __u__: "",
        isLogedIn: false
    },
    reducers: {

        setAuth: (state, action) => {
            return {
                ...state,
                auth: action.payload
            }
        },

        setSchoolInfo: (state, action) => {
            return {
                ...state,
                schoolInfo: action.payload
            }
        },

        setPaymentInfo: (state, action) => {
            return {
                ...state,
                paymentInfo: action.payload
            }
        },

        logedIn: (state, action) => {
            return {
                ...state,
                __u__: action.payload,
                isLogedIn: true
            }
        },

        logOut: (state, action) => {
            return {
                ...state,
                __u__: "",
                isLogedIn: false
            }
        },

        clearCache: (state, action) => {
            return {
                ...state,
                ...authorInfo
            }
        },

    }
})
