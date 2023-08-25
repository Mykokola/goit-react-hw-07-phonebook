import { ContactListBtn, ContactListUl } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import {selectContact} from '../../redux/selectors'
import { fetchContact,deleteContact } from 'redux/operation';
import {
  getFilterValue,
  getContactsItems,
} from 'redux/taskSlice';
export function ContactList() {
  const dispatch = useDispatch()
  // const dispatch = useDispatch();
  // const contactValue = useSelector(getContactsItems);
  // const filter = useSelector(getFilterValue);
  // const filterContancts = e => {
  //   return contactValue.filter(e =>
  //     e.name.toLowerCase().includes(filter.toLocaleLowerCase())
  //   );
  // };
  // const contactArry = filterContancts();
  const contactList = useSelector(selectContact)
  return (
    <>
      <ContactListUl>
        {contactList.map(({ id, name, Number }) => {
          return (
            <li key={id}>
              {name} : {Number}
              <ContactListBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id))
              //  dispatch(fetchContact())
                }}
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
