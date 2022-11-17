import { adminSlice } from "./slice";
const { actions: slice } = adminSlice;

export const adminLogin = __a__ => (dispatch) => {
  console.log(__a__);
  dispatch(slice.LogedIn(__a__));
}

export const LogOut = () => (dispatch) => {
  dispatch(slice.LogOut());
}
