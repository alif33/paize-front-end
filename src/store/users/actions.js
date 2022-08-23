import { userSlice } from "./slice";
const { actions: slice } = userSlice;

export const setAuth = __u__ => (dispatch) => {
    dispatch(slice.setAuth(__u__));
}

export const setSchoolInfo = __s__ => (dispatch) => {
    dispatch(slice.setSchoolInfo(__s__));
}

export const setPaymentInfo = __p__ => (dispatch) => {
    dispatch(slice.setPaymentInfo(__p__))
}

export const logedIn = u => (dispatch) => {
    dispatch(slice.logedIn(u))
}

export const logOut = () => (dispatch) => {
    dispatch(slice.logOut())
}