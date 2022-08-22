import { createSlice } from '@reduxjs/toolkit';
import { authorInfo } from '../../__lib__/config';



export const userSlice = createSlice({
    name: "users",
    initialState: {
        ...authorInfo,
        __u__: ""
    },
    reducers: {

        setAuth: (state, action) => {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    ...action.payload
                }
            }
        },

        setSchoolInfo: (state, action) => {
            return {
                ...state,
                schoolInfo: {
                    ...state.schoolInfo,
                    ...action.payload
                }
            }
        },

        setPaymentInfo: (state, action) => {
            return {
                ...state,
                paymentInfo: {
                    ...state.paymentInfo,
                    ...action.payload
                }
            }
        },

        logedIn: (state, action) => {
            return {
                ...state,
                __u__: action.payload
            }
        },
    }
})
