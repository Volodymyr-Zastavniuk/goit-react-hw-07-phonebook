import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Section>
            <h1>Phonebook</h1>
            <ContactForm />
          </Section>

          <Section>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </Section>
        </PersistGate>
      </Provider>
    </>
  );
}
