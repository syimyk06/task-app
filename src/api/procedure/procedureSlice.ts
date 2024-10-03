// taskSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initData } from './initData';

export interface IProcedure {
  id: string;
  dateCreated: string;
  dateUpdated: string;
  name: string;
  desc: string | null;
  price: string;
  duration_value: string;
  checked: boolean;
}

export interface ProceduresState {
  procedures: IProcedure[];
}

const initialState: ProceduresState = {
  procedures: initData
};

export const proceduresSlice = createSlice({
  name: "procedures",
  initialState,
  reducers: {
    getProcedures(state, action: PayloadAction<IProcedure[]>) {
      state.procedures = action.payload.map((procedure) => ({
        ...procedure,
        checked: false,
      }));
    },
    checkProcedure(state, action: PayloadAction<string>) {
      const procedure = state.procedures.find((p) => p.id === action.payload);
      if (procedure) {
        procedure.checked = !procedure.checked;
      }
    },
  },
});

export const { getProcedures, checkProcedure } = proceduresSlice.actions;
export default proceduresSlice.reducer;
