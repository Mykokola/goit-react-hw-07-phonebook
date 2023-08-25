import { FilterLabel, FilterTitle } from './ContactListFilter.Styled';
//import { getFilterValue, setFilter } from 'redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/taskSlice';
import { selectStatusFilter } from 'redux/selectors';
export function ContactListFilter() {
  const dispatch = useDispatch();
  const {filter} = useSelector(selectStatusFilter)
  return (
    <>
      <FilterTitle>Contacts</FilterTitle>
      <FilterLabel>
        Find contacts by name
        <input
          onChange={e => dispatch(setFilter(e.target.value))}
          type="text"
          name="filter"
          value={filter}
        />
      </FilterLabel>
    </>
  );
}
