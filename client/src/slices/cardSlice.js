
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api';

// Acción asincrónica para obtener las tarjetas del usuario
export const getUserCards = createAsyncThunk('/card/getUserCards', async (_, { getState }) => {
  const { auth } = getState();
  const token = auth.user.token;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${API_URL}/card`, requestOptions);
    if (!response.ok) {
      throw new Error('Error retrieving user cards');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Acción asincrónica para crear una tarjeta de crédito
export const createCard = createAsyncThunk('/card/createCard', async (cardData, { getState }) => {
  const { auth } = getState();
  const token = auth.user.token;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardData),
  };

  try {
    const response = await fetch(`${API_URL}/card`, requestOptions);
    if (!response.ok) {
      throw new Error('Error creating card');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Acción asincrónica para eliminar una tarjeta de crédito
export const deleteCard = createAsyncThunk('card/deleteCard', async (cardId, { getState }) => {
  const { auth } = getState();
  const token = auth.user.token;
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${API_URL}/card/${cardId}`, requestOptions);
    if (!response.ok) {
      throw new Error('Error deleting card');
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const updateCard = createAsyncThunk(
  'card/updateCard',
  async ({ cardId, data }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/card/${cardId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      const updatedCard = await response.json();
      return updatedCard;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    loading: false,
    error: null,
    delete: false, // indica el estado de eliminación
    updating: false, //indica el estado de actualización
    updateError: null, // almacenaa errores de actualización
  },
  reducers: {
    clearCards(state) {
      state.cards = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Reducer para la acción getUserCards
    builder.addCase(getUserCards.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUserCards.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Reducer para la acción createCard
    builder.addCase(createCard.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCard.fulfilled, (state, action) => {
      state.cards.push(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Reducer para la acción deleteCard
    builder.addCase(deleteCard.pending, (state) => {
      state.loading = true;
      state.delete = false;
      state.error = null;
    });
    builder.addCase(deleteCard.fulfilled, (state, action) => {
      state.cards = state.cards.filter((card) => card._id !== action.payload);
      state.loading = false;
      state.delete = true;
      state.error = null;
    });
    builder.addCase(deleteCard.rejected, (state, action) => {
      state.loading = false;
      state.delete = false;
      state.error = action.error.message;
    });
    // Reducer para la acción updateCard
    builder.addCase(updateCard.pending, (state) => {
      state.updating = true;
      state.updateError = null;
    });
    builder.addCase(updateCard.fulfilled, (state, action) => {
      state.updating = false;
      const updatedCard = action.payload;
      const cardIndex = state.cards.findIndex((card) => card._id === updatedCard._id);
      if (cardIndex !== -1) {
        state.cards[cardIndex] = updatedCard;
      }
    });
    builder.addCase(updateCard.rejected, (state, action) => {
      state.updating = false;
      state.updateError = action.payload;
    });
  },
});


export const selectCards = (state) => state.card.cards;
export const { clearCards } = cardSlice.actions;
export default cardSlice.reducer;