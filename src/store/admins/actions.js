import { adminSlice } from "./slice";
const { actions: slice } = adminSlice;

export const adminLogin = __a__ => (dispatch) => {
  console.log(__a__);
  dispatch(slice.adminLogin(__a__));
}

export const adminLogout = () => (dispatch) => {
  dispatch(slice.adminLogout());
}
