import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { ContactList } from './ContactList/ContactList';
import { fetchContact } from 'redux/operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContact())
  },[dispatch])
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
