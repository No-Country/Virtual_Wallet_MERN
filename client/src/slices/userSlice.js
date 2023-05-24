import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL_USER = 'http://localhost:5000/api/user/';
//funcion para realizar la peticion http
const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (id) => {
    const response = await fetch(`${API_URL_USER}/get-one/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el usuario');
    }
    const data = await response.json();
    return data;
  
  }
); 

//slice para el user
const userSlice = createSlice({
  name: 'usuario',
  initialState: {
    user: null,
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: (builder) =>{
    builder
    .addCase(fetchUserById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export const selectUser = (state) => state.user.user;
export { fetchUserById }
export default userSlice.reducer;