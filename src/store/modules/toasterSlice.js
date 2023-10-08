import { createSlice } from "@reduxjs/toolkit";

const toasterSlice = createSlice({
  name: "toaster",
  initialState: {
    isToaster: false,
    toasterMessage: ""
  },
  reducers: {
    // here have functions which will amend the state only
    SET_TOASTER: (state, action) => {
      state.isToaster = action.payload.toasterStatus;
      state.toasterMessage = action.payload.toasterMessage;
    },
    CLOSE_TOASTER: (state) => {
      state.isToaster = false;
      state.toasterMessage = "";
    }
  }
});

const { actions, reducer } = toasterSlice;
export default reducer;
const { SET_TOASTER } = actions;
const { CLOSE_TOASTER } = actions;

// Actions

export const setToasterState =
  (toasterStatus, toasterMessage) => (dispatch) => {
    dispatch(SET_TOASTER({ toasterStatus, toasterMessage }));
  };

export const closeToaster = () => (dispatch) => {
  dispatch(CLOSE_TOASTER());
};
