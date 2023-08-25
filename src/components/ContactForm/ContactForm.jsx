import React from 'react';
import { FormTitle, FormContact, FormButton } from './ContactForm.Styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContact } from 'redux/selectors';
export function ContactForm() {
  const dispatch = useDispatch();
  const contactsValue = useSelector(selectContact);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    mode: 'onTouched',
  });

  const submitForm = data => {
    const { name, number } = data;
    const loverName = data.name.toLowerCase();
    if (contactsValue.find(item => item.name.toLowerCase() === loverName)) {
      console.log('this name already exists');
    } else dispatch(addContact({ name, Number: number }));

    reset();
  };

  return (
    <>
      <FormTitle>Phone Book</FormTitle>
      <FormContact onSubmit={handleSubmit(submitForm)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            {...register('name')}
          />
        </label>
        <label>
          Tel:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            {...register('number')}
          />
        </label>
        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    </>
  );
}
