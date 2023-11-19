import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  search: string;
  number: number;
  isLoadingMain: boolean;
}

const initialState: DataState = {
  search: '',
  number: 10,
  isLoadingMain: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateSearch(state, action) {
      state.search = action.payload;
    },
    updateLoading(state) {
      state.isLoadingMain = !state.isLoadingMain;
    },
    updateNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { updateSearch, updateLoading, updateNumber } = dataSlice.actions;

export default dataSlice.reducer;
