import { FilterLabel, FilterTitle } from './ContactListFilter.Styled';
import { getFilterValue, setFilter } from 'redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
export function ContactListFilter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  return (
    <>
      <FilterTitle>Contacts</FilterTitle>
      <FilterLabel>
        Find contacts by name
        <input
          onChange={e => dispatch(setFilter(e.target.value))}
          type="text"
          name="filter"
          value={filterValue}
        />
      </FilterLabel>
    </>
  );
}
