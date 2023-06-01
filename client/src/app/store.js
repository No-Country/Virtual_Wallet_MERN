import { configureStore } from "@reduxjs/toolkit";
import cardFabianReducer from "../slices/cardFabianSlice";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import cardReducer from "../slices/cardSlice";
import transactionSlice from "../slices/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    card: cardReducer,
    transaction: transactionSlice,

    cardFabian: cardFabianReducer, // Agrega el reducer de las tarjetas (cardSlice.reducer)
  },
});
