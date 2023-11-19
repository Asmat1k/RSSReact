import { useLocation, useNavigate } from 'react-router-dom';
import styles from './pagination.module.scss';

import { updateSearch } from '../../store/reducers/dataSlice';
import { useDispatch } from 'react-redux';

function Pagination() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const updateSearchState = (str: string) => dispatch(updateSearch(str));

  async function handleButtonClick(next?: boolean) {
    const nextPageNum = location.search
      ? +location.search.slice(location.search.length - 1) + 1
      : 2;
    let isNext = 1;
    if (next) {
      isNext = nextPageNum;
    } else if (nextPageNum > 2) {
      isNext = nextPageNum - 2;
    }
    navigate(`/?page=${isNext}`);
    const search = localStorage.getItem('lastSearch');

    updateSearchState(`?search=${search}&page=${isNext}`);
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          handleButtonClick(false);
        }}
      >
        &lt;
      </button>
      <button className={styles.button} onClick={() => handleButtonClick(true)}>
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
