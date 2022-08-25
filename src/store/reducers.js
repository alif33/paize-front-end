import { combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './admins/slice';
import { userSlice } from './users/slice';
import { studentSlice } from './students/slice';

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admin: adminSlice.reducer,
    students: studentSlice.reducer
})