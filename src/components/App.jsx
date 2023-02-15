import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from 'redux/store';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/Contacts/contacts.operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import Loader from './Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Provider store={store}>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm />
        </Section>

        <Section>
          {isLoading && !error && <Loader />}
          <h2>Contacts</h2>
          <Filter />
          {error && <p>Something went wrong, please try again later...</p>}
          {!error && <ContactList />}
        </Section>
      </Provider>
    </>
  );
}
