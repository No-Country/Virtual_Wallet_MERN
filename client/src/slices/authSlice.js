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
    const { email, password } = credentials

    if (!email || !password) {
      // Devolver un error si falta el correo o la contraseña
      return thunkAPI.rejectWithValue('Correo o contraseña no válidos')
    }

    try {
      return await authService.userLogin(credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload

      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))

        state.isAuthenticated = true
        state.user = user
        console.log(token)
      }
    },
    logout: () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      return {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null
      }
      // state.isAuthenticated = false
      // state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      // .addCase(login.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.user = action.payload
      // })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        // state.user = action.payload
        state.user = action.payload.user
        state.isAuthenticated = true
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      
  }
})
export const { loginSuccess, logout } = authSlice.actions

export default authSlice.reducer

