import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { ContactList } from './ContactList/ContactList';
const App = () => {
  return (
    <>
      <ContactForm></ContactForm>
      <ContactListFilter
      ></ContactListFilter>
      <ContactList
      ></ContactList>
    </>
  );
};
export default App;
