import { createSlice } from '@reduxjs/toolkit';
import { authorInfo } from '../../__lib__/config';


export const studentSlice = createSlice({
    name: "student",
    initialState: {
        auth: authorInfo.auth
    },
    reducers: {

        setStudentAuth: (state, action) => {
            return {
                ...state,
                auth: action.payload
            }
        }
    },
})
