import React, { useEffect, useState } from 'react';
import styles from './search.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

import { updateNumber, updateSearch } from '../../store/reducers/dataSlice';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch();
  const updateSearchState = (str: string) => dispatch(updateSearch(str));
  const updateNumberState = (number: number) => dispatch(updateNumber(number));

  const navigation = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState<string>(
    localStorage.getItem('lastSearch')
      ? localStorage.getItem('lastSearch')!
      : ''
  );

  const [number, setNumber] = useState<number>(10);

  useEffect(() => {
    handleButtonClick();
    updateSearchState(`?search=${value}&page=1`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleInputNumberEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(+event.target.value);
  }

  function handleInputBlurEvent() {
    localStorage.setItem('lastSearch', value);
  }

  async function handleBlurEvent() {
    updateNumberState(number);

    navigation('/?page=1');
  }

  async function handleButtonClick(
    event?: React.MouseEvent<HTMLButtonElement>
  ) {
    localStorage.setItem('lastSearch', value);
    if (event) event.preventDefault();

    updateNumberState(number);

    let pageQuery = '&page=1';
    if (location.search) {
      pageQuery = `&${location.search.slice(1)}`;
    }
    updateSearchState(`?search=${value}${pageQuery}`);
  }

  return (
    <form className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type StarWars character..."
        maxLength={20}
        value={value}
        onChange={(e) => handleInputEvent(e)}
        onBlur={() => handleInputBlurEvent()}
      />
      <input
        className={styles.number}
        type="number"
        min="1"
        max="10"
        value={number}
        onChange={(e) => handleInputNumberEvent(e)}
        onBlur={() => handleBlurEvent()}
      />
      <button className={styles.button} onClick={(e) => handleButtonClick(e)}>
        Search
      </button>
    </form>
  );
}

export default Search;
