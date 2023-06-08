import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { updateCard } from './cardSlice';

export const createTransaction = createAsyncThunk(
  "transactions/createTransaction",
  async (
    { card, concept, receiver_account, amount, cardId, token },
    { getState, rejectWithValue }
  ) => {
    try {
      // Obtener el token desde el estado de Redux

      console.log(token);

      console.log(card);
      console.log(concept);
      console.log(receiver_account);
      console.log(amount);
      console.log(cardId);

      // Lógica para crear una transacción usando axios y enviar el token en los encabezados
      const transactionResponse = await axios.post(
        "http://localhost:5000/api/transaction/create-transaction",
        {
          card,
          concept,
          receiver_account,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(transactionResponse.data);

      // Lógica para actualizar el monto de la tarjeta asociada a la transacción
      const cards = getState().cardFabian;

      const cardToUpdate = cards.data.find((card) => card._id === cardId);
      //   const cardToUpdate = cards.data.find((card) => console.log(card));

      console.log(cards);

      console.log(cardToUpdate);

      if (cardToUpdate) {
        console.log("westoy aqui");
        // Verificar si el saldo es suficiente para realizar la transferencia
        if (cardToUpdate.balance >= amount) {
          // Realiza la actualización del monto de la tarjeta y envía el token en los encabezados
          const updatedCard = {
            ...cardToUpdate,
            balance: cardToUpdate.balance - amount,
          };
          const updateCardResponse = await axios.put(
            `http://localhost:5000/api/card/${cardToUpdate._id}`,
            updatedCard,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Si la actualización fue exitosa, retorna la transacción
          if (updateCardResponse.status === 200) {
            console.log(updateCardResponse.data);

            return transactionResponse.data;
          } else {
            throw new Error("Error updating card balance");
          }
        } else {
          throw new Error("Insufficient balance");
        }
      } else {
        throw new Error("Card not found");
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, { rejectWithValue }) => {
    try {
      // Obtener el token del front-end (por ejemplo, almacenado en el localStorage)
      const token = localStorage.getItem("token"); // Ajusta el nombre según donde estés almacenando el token en el front-end

      // Verificar si el token está presente
      if (!token) {
        throw new Error("Token not found");
      }

      // Lógica para obtener las transacciones del usuario usando axios y enviar el token en los encabezados
      const transactions = await axios.get(
        "http://localhost:5000/api/transaction/get-transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return transactions.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id, { getState, rejectWithValue }) => {
    try {
      // Obtener el token desde el estado de Redux
      const { token } = getState().user; // Ajusta el nombre de la propiedad según corresponda en tu estado

      // Lógica para eliminar una transacción usando axios y enviar el token en los encabezados
      const deletedTransaction = await axios.delete(
        `http://localhost:5000/api/transaction/delete-transaction/:${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!deletedTransaction) {
        throw new Error("Transacción no encontrada");
      }

      return deletedTransaction.data._id;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        const deletedTransactionId = action.payload;
        state.transactions = state.transactions.filter(
          (transaction) => transaction._id !== deletedTransactionId
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;
