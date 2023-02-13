import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsInitState } from './contacts.init-state';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload); //Immer
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { deleteContact, addContact } = contactsSlice.actions;
