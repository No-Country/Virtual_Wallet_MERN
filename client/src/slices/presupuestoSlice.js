import { createSlice } from "@reduxjs/toolkit";

const presupuestoSlice = createSlice({
  name: "presupuesto",
  initialState: {
    total: 3000, // de momento lo hardcoreo, despues lo traere del total de las rads
    presupuestos: [], //array ya que almacenare varios
  },
  reducers:{
    agregarPresupuesto: (state, action) => {
      state.presupuestos.push(action.payload);
    }
  },
  quitarPresupuesto: (state, action) => {
    state.presupuestos = state.presupuestos.filter(
      (presupuesto) => presupuesto.id !== action.payload
    );
  },
  limpiarPresupuestos: (state) => {
    state.presupuestos = [];
  },
  actualizarTotal: (state, action) => {
    state.total = action.payload;
  },

})

export const { agregarPresupuesto, quitarPresupuesto, limpiarPresupuestos, actualizarTotal } = presupuestoSlice.actions;
export default presupuestoSlice.reducer;