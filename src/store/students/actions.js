import { studentSlice } from "./slice";
const { actions: slice } = studentSlice;

export const setStudentAuth = __s__ => (dispatch) => {
    dispatch(slice.setStudentAuth(__s__));
}

export const clearData = __s__ => (dispatch) => {
    dispatch(slice.clearData(__s__));
}


