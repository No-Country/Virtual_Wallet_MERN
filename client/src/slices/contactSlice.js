import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:5000/api/contact';


//accion asincrona para crear un mensaje
export const createMessage = createAsyncThunk('contact/createMessage', async (messageData) => {
  try{
    const response = await fetch(`${API_URL}/create-message`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(messageData)
    });
    if (!response.ok){
      throw new Error('Error al crear el mensaje');
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
});

// Acción asincrónica para obtener todos los mensajes de contacto
export const getMessages = createAsyncThunk('contacts/getMessages', async () => {
  try {
    const response = await fetch(`${API_URL}/get-messages`);

    if (!response.ok) {
      throw new Error('Error retrieving messages');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
});

// Acción asincrónica para eliminar un mensaje de contacto
export const deleteMessage = createAsyncThunk('contacts/deleteMessage', async (messageId) => {
  try {
    const response = await fetch(`${API_URL}/delete-message/${messageId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting message');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
});

//slice de contactos
const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    messages: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setMessageRead: (state, action) => {
      const messageId = action.payload;
      const message = state.messages.find((msg) => msg.id === messageId);
      if (message) {
        message.read = true;
      }
    },
    markAllMessagesRead: (state) => {
      state.messages.forEach((msg) => {
        msg.read = true;
      });
    },
  },
  extraReducers:(builder) => {
    //manejo accion createMessage pendiente
    builder.addCase(createMessage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    //manejo accion createMessage exitosa
    builder.addCase(createMessage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.messages.push(action.payload);
    });
    //manejo accion createMessage fallida
    builder.addCase(createMessage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })

    // Manejo de la acción getMessages pendiente
    builder.addCase(getMessages.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    //  Manejo de la acción getMessages completada con éxito
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    });
    // Manejo de la acción getMessages con error
    builder.addCase(getMessages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Manejo de la acción deleteMessage pendiente
    builder.addCase(deleteMessage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Manejo de la acción deleteMessage completada con éxito
    builder.addCase(deleteMessage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.messages = state.messages.filter((message) => message.ref_number !== action.payload.ref_number);
    });
    // Manejo de la acción deleteMessage con error
    builder.addCase(deleteMessage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
})

//exportamos acciones y reducers
export const selectContact = (state) => state.contacts;
export const { setMessageRead, markAllMessagesRead } = contactSlice.actions;
export default contactSlice.reducer;