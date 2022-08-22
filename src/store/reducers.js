import { combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './admins/slice';
import { userSlice } from './users/slice';
import { studentSlice } from './students/slice';

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    students: studentSlice.reducer
})