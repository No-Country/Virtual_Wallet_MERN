import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


//cuando hagas el deploy , descomenta esto y comenta el local
// const API_URL = 'https://rest-api-wallet-no-country-production.up.railway.app/api/transaction';

// Definir la URL base para las llamadas a la API
const API_URL = 'http://localhost:5000/api/transaction';

// Acción asíncrona para crear una transacción
export const createTransaction = createAsyncThunk(
  'transaction/createTransaction',
  async (transactionData, { getState }) => {
    try {
      const { token } = getState().auth.user;
      const response = await fetch(`${API_URL}/create-transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(transactionData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Acción asíncrona para obtener todas las transacciones del usuario
export const getTransactions = createAsyncThunk(
  'transaction/getTransactions',
  async (_, { getState }) => {
    try {
      const { token } = getState().auth.user;
      const response = await fetch(`${API_URL}/get-transactions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data.filtered_transactions;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Acción asíncrona para eliminar una transacción por su ID
export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transactionId, { getState }) => {
    try {
      const { token } = getState().auth.user;
      const response = await fetch(`${API_URL}/delete-transaction/${transactionId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return transactionId;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Slice de Redux para manejar las transacciones
const guilleTransferSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearTransactions: (state) => {
      state.transactions = [];
    },
  },
  extraReducers: (builder) => {
    // Reducer para la acción de crear una transacción
    builder.addCase(createTransaction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions.push(action.payload);
    });
    builder.addCase(createTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Reducer para la acción de obtener todas las transacciones
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Reducer para la acción de eliminar una transacción
    builder.addCase(deleteTransaction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = state.transactions.filter(
        (transaction) => transaction._id !== action.payload
      );
    });
    builder.addCase(deleteTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

     // Reducer para la acción de eliminar todas las transacciones
    builder.addCase(transactionActions.clearTransactions, (state) => {
      state.transactions = [];
    });
  },
});

// Exportar acciones y selector
export const { actions: transactionActions, reducer: transactionReducer } = guilleTransferSlice;
export const selectTransactions = (state) => state.transaction.transaction;
export const { clearTransactions } = guilleTransferSlice.actions;
export default guilleTransferSlice.reducer;

