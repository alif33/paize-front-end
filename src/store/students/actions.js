import { studentSlice } from "./slice";
const { actions: slice } = studentSlice;

export const setStudentAuth = __s__ => (dispatch) => {
    dispatch(slice.setStudentAuth(__s__));
}


