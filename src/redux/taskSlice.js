import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContact, deleteContact, fetchContact } from './operation';

const handlPenging = state =>{
  state.isLoading = true
}
const handleRejected = (state,action) => {
  state.isLoading = false
  state.error = action.payload
}
export const contactSlice = createSlice({
  name:"contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers:{
    [fetchContact.pending]:handlPenging,
    [fetchContact.fulfilled](state,action){
      state.isLoading = false;
      state.error = null;
      state.items = action.payload
    },
    [fetchContact.rejected]: handleRejected,
    [addContact.pending]:handlPenging,
    [addContact.fulfilled](state,action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
    },
    [addContact.rejected]:handleRejected,
    [deleteContact.pending]:handlPenging,
    [deleteContact.fulfilled](state,action){
      state.isLoading =false;
      state.error = null;
      state.items.filter(task => task.id !== action.payload);
    },
    [deleteContact.rejected]: handleRejected
    
  }
})
const filterSlice = createSlice({
  name:"filters",
  initialState:{
    filter:''
  },
  reducers:{
    setFilter(state, action){
      state.status = action.payload
    }
  }
})
// export const contactSlice = createSlice({
//   name: 'contact',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer(state, { payload }) {
//         state.items.push(payload);
//       },
//       prepare(contact) {
//         return {
//           payload: {
//             ...contact,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//   },
// });
// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     setFilter(state, action) {
//       state.value = action.payload;
//     },
//   },
// });
// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );
// export const { setFilter } = filterSlice.actions;
// export const { addContact, deleteContact } = contactSlice.actions;
// export const getFilterValue = state => state.filter.value;
// export const getContactsItems = state => state.contacts.items;
export const contactReducer = contactSlice.reducer;
export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer