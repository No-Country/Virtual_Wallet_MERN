import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//cuando hagas el deploy , descomenta esto y comenta el local
// const API_URL = 'https://rest-api-wallet-no-country-production.up.railway.app/api/user';

const API_URL = "http://localhost:5000/api/user";

// Acción asincrónica para obtener un usuario por ID
export const fetchUserByid = createAsyncThunk(
  "user/fetchUserById",
  async (userId) => {
    const response = await fetch(`${API_URL}/get-one/${userId}`);
    if (!response.ok) {
      throw new Error("Error al obtener el usuario");
    }
    const data = await response.json();
    // console.log("DATA ->->", data);
    return data;
  }
);

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async () => {
    const response = await fetch(`${API_URL}/get-all`);
    if (!response.ok) {
      throw new Error("Error al obtener el usuario");
    }
    const data = await response.json();
    // console.log("DATA ->->", data);
    return data;
  }
);

//accion asincronica para actualizar un usuario
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, userData }) => {
    const response = await fetch(`${API_URL}/update-one/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }
    const data = await response.json();
    return data;
  }
);

// Acción asincrónica para eliminar un usuario
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    const response = await fetch(`${API_URL}/delete-one/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el usuario");
    }
    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    deleted: false,
    updated: false,
  },
  reducers: {
    // Acción para limpiar el estado del usuario
    clearUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.deleted = false;
      state.updated = false;
    },

    // Acción para marcar el usuario como eliminado
    markUserAsDeleted(state) {
      state.deleted = true;
    },
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
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.updated = false;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.updated = true;
        // Actualizar los datos del usuario si es necesario
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        state.deleted = true;
        // Realizar acciones adicionales si es necesario
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllUsers.pending, (state) => {  // Cambia el caso aquí
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {  // Cambia el caso aquí
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {  // Cambia el caso aquí
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// ... Exportar acciones y reducer ...
export const selectUser = (state) => state.user.user;

export const { clearUser, markUserAsDeleted } = userSlice.actions;

export default userSlice.reducer;
