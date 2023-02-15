const { createAsyncThunk } = require('@reduxjs/toolkit');
const {
  fetchData,
  addNewContact,
  deleteContactById,
} = require('services/contactsApi');

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchData();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const contacts = await addNewContact(contact);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const contacts = await deleteContactById(id);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
