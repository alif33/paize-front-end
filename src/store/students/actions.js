import { studentSlice } from "./slice";
const { actions: slice } = studentSlice;

export const setAuthInfo = e => (dispatch) => {
    dispatch(slice.setAuthInfo({
        [e.target.name]: e.target.value
    }))
}

export const setLocation = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setLocation({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setLocation({
            [e.target.name]: e.target.value
        }))
    }
}

export const setDetails = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setDetails({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setDetails({
            [e.target.name]: e.target.value
        }))
    }
}

export const setContact = e => (dispatch) => {
    if(e.target.value.toUpperCase()==="CHOOSE")
    {   
        dispatch(slice.setContact({
            [e.target.name]: null
        }))
    }else{
        dispatch(slice.setContact({
            [e.target.name]: e.target.value
        }))
    }
}

export const forwordStep = () => (dispatch) => {
    dispatch(slice.forwordStep())
}

export const backwordStep = () => (dispatch) => {
    dispatch(slice.backwordStep())
}

