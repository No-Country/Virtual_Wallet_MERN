import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from './authService'

const initialState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  loading: false,
  error: null
}

// Definir una función asincrónica para realizar la solicitud de inicio de sesión
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials)
      return await authService.userRegister(credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await authService.userLogin(credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// Definir el slice de Redux
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token)
      state.isAuthenticated = true
      console.log(action.payload.token)
    },
    logout: (state) => {
      localStorage.removeItem('token')
      state.isAuthenticated = false
      // Resto de la lógica
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})
export const { loginSuccess, logout } = authSlice.actions

export default authSlice.reducer
