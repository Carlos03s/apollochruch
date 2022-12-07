import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubCategoryTyped {
  addCaixaOption: string,
  caixaModalOpen: string
}

const initialState: SubCategoryTyped = {
  addCaixaOption: 'entrada',
  caixaModalOpen: ''
}


 const SliceAddCaixa = createSlice({
  name: "option",
  initialState,
  reducers: {
    addCaixa: (state, action: PayloadAction<string>) => {
      state.addCaixaOption = action.payload;
    },
    handleAddCaixaModal: (state, action: PayloadAction<string>) => {
        state.caixaModalOpen = action.payload;
      },
  },
});

export const { addCaixa } = SliceAddCaixa.actions;
export const { handleAddCaixaModal } = SliceAddCaixa.actions;

export default SliceAddCaixa.reducer;
 