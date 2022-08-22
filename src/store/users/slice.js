import { createSlice } from '@reduxjs/toolkit';
import { authorInfo } from '../../__lib__/config';



export const userSlice = createSlice({
    name: "users",
    initialState: {
        ...authorInfo
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
        }
    }
})
