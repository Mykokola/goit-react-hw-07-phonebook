import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact } from './operation';

const handlPenging = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContact.pending]: handlPenging,
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContact.rejected]: handleRejected,
    [addContact.pending]: handlPenging,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlPenging,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.filter(task => task.id !== action.payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});
const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const contactReducer = contactSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
