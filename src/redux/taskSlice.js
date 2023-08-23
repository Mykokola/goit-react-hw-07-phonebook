import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
  items: [],
  value: '',
};
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { setFilter } = filterSlice.actions;
export const { addContact, deleteContact } = contactSlice.actions;
export const getFilterValue = state => state.filter.value;
export const getContactsItems = state => state.contacts.items;
