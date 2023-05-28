import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    axiosCardSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
      console.log("Data:", action.payload); // Agrega este console.log
    },
    axiosCardFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { axiosCardSuccess, axiosCardFailure } = cardSlice.actions;

//tunks
export const axiosCard = (token) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/card", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    dispatch(axiosCardSuccess(response.data));
  } catch (error) {
    dispatch(axiosCardFailure(error.message));
  }
};

export const createCard = (token, cardData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/card", cardData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    dispatch(axiosCardSuccess(response.data));
  } catch (error) {
    dispatch(axiosCardFailure(error.message));
  }
};

export const getUserCards = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/user/${userId}/cards`);
    console.log(response.data);
    dispatch(axiosCardSuccess(response.data));
  } catch (error) {
    dispatch(axiosCardFailure(error.message));
  }
};

export default cardSlice.reducer;