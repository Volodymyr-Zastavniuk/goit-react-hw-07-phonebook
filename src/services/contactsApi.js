import axios from 'axios';
axios.defaults.baseURL = 'https://63ea920a8f0a20aa341c26fb.mockapi.io';

export const fetchData = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addNewContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactById = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data.id;
};
