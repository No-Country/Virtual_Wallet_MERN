import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('user')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  preloadedState: {
    auth: {
      isAuthenticated: localStorage.getItem('token') ? true : false,
      user: loadStateFromLocalStorage(),
      loading: false,
      error: null
    }
  }
})

