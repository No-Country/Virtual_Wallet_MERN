import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//cuando hagas el deploy , descomenta esto y comenta el local
// const API_URL = 'https://rest-api-wallet-no-country-production.up.railway.app/api/budget';

const API_URL = 'http://localhost:5000/api/budget';
const token = localStorage.getItem("token");


// Acción asincrónica para crear un presupuesto
export const createBudget = createAsyncThunk(
  'budgets/createBudget',
  async (budgetData, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(budgetData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        return thunkAPI.rejectWithValue(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Acción asincrónica para obtener los presupuestos
export const getBudgets = createAsyncThunk(
  'budgets/getBudgets',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/get`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        const errorMessage = await response.text();
        return thunkAPI.rejectWithValue(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Acción asincrónica para eliminar un presupuesto
export const deleteBudget = createAsyncThunk(
  'budgets/deleteBudget',
  async (budgetId, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/remove/${budgetId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        return thunkAPI.rejectWithValue(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState:{
    budgets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedBudget: (state, action) => {
      state.selectedBudget = action.payload;
    },
    resetBudgets: (state) => {
      state.budgets = [];
    },
    clearBudgets: (state) => {
      state.budgets = [];
      state.selectedBudget = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Manejo de las acciones asincrónicas
    builder
      .addCase(createBudget.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createBudget.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.budgets.push(action.payload);
      })
      .addCase(createBudget.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getBudgets.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getBudgets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.budgets = action.payload;
      })
      .addCase(getBudgets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteBudget.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteBudget.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.budgets = state.budgets.filter((budget) => budget._id !== action.payload.removed._id);
      })
      .addCase(deleteBudget.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const selectBudgets = (state) => state.budgets.budgets;
export const { setSelectedBudget, resetBudgets, clearBudgets } = budgetsSlice.actions;
export default budgetsSlice.reducer;
