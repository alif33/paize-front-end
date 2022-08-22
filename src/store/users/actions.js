import { userSlice } from "./slice";
const { actions: slice } = userSlice;

export const setAuth = e => (dispatch) => {
    dispatch(slice.setAuth({
        [e.target.name]: e.target.value
    }))
}

export const setSchoolInfo = e => (dispatch) => {
    dispatch(slice.setSchoolInfo({
        [e.target.name]: e.target.value
    }))
}

export const setPaymentInfo = e => (dispatch) => {
    dispatch(slice.setPaymentInfo({
        [e.target.name]: e.target.value
    }))
}
