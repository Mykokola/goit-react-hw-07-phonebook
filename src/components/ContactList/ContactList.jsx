import { ContactListBtn, ContactListUl } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterValue,
  getContactsItems,
  deleteContact,
} from 'redux/taskSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contactValue = useSelector(getContactsItems);
  const filter = useSelector(getFilterValue);
  const filterContancts = e => {
    return contactValue.filter(e =>
      e.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  const contactArry = filterContancts();
  return (
    <>
      <ContactListUl>
        {contactArry.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} : {number}
              <ContactListBtn
                onClick={() => dispatch(deleteContact({ id: id }))}
                type="button"
              >
                delete
              </ContactListBtn>
            </li>
          );
        })}
      </ContactListUl>
    </>
  );
}
