import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import cardReducer from "../slices/cardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    card: cardReducer, // Agrega el reducer de las tarjetas (cardSlice.reducer)
  },
});
