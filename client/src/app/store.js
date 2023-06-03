import { configureStore } from "@reduxjs/toolkit";
import cardFabianReducer from "../slices/cardFabianSlice";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import cardReducer from "../slices/cardSlice";
import transactionSlice from "../slices/transactionSlice";
import guilleTransferReducer from "../slices/guilleTransferSlice";
import presupuestoReducer from "../slices/presupuestoSlice";
import budgetReducer from "../slices/budgetSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    card: cardReducer,
    transaction: transactionSlice,

    cardFabian: cardFabianReducer, // Agrega el reducer de las tarjetas (cardSlice.reducer)
    transactionGuille: guilleTransferReducer, // Agrega el reducer de transferencias (guilleTransferSlice.reducer)

    //prueba presupuesto
    presupuesto: presupuestoReducer,
    budgets: budgetReducer,
  },
});
