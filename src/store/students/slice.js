import { createSlice } from '@reduxjs/toolkit';
import { studentInfo } from '../../__lib__/config';


export const studentSlice = createSlice({
    name: "student",
    initialState: {
        ...studentInfo
    },
    reducers: {

        setAuthInfo: (state, action) => {
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
    },
})
