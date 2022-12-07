
import { configureStore } from '@reduxjs/toolkit';
import SliceAddCaixa from './SliceAddCaixa';

export const store = configureStore({
  reducer: {
    caixaOption: SliceAddCaixa,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type addDispatch = typeof store.dispatch;
