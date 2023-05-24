import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/user';

// Acción asincrónica para obtener un usuario por ID
export const fetchUserByid = createAsyncThunk(
  'user/fetchUserById',
  async (userId) => {
    const response = await fetch(`${API_URL}/get-one/${userId}`);
    if (!response.ok) {
      throw new Error('Error al obtener el usuario');
    }
    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // ... Otras acciones y reducers ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByid.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByid.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserByid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// ... Exportar acciones y reducer ...
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
