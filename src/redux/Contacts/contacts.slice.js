import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts.operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

const handleFulfiled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleError)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.items = payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleError)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.items.push(payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleError)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.items = state.items.filter(item => item.id !== payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
