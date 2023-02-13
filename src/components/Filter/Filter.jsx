import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const isEmptyList = contacts.length === 0 ? true : false;

  return (
    <>
      <label className="filter">
        Find contact by name
        <input
          disabled={isEmptyList}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filterValue}
          onChange={event =>
            dispatch(setFilterValue(event.currentTarget.value))
          }
          className="filter__input"
        />
      </label>
      {isEmptyList && <div>Please add some contacts to the list</div>}
    </>
  );
};

export default Filter;
