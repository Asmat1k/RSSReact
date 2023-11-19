import styles from './detailed-item.module.scss';

import { useLoaderData, useNavigate } from 'react-router-dom';
import { ApiProps } from '../../types/types';

function DetailedItem() {
  const navigate = useNavigate();
  const loader = useLoaderData() as ApiProps;

  function handleButtonClick() {
    navigate('/');
  }

  const { results } = loader;

  return (
    <section className={styles.wrapper}>
      <div className={styles.item}>
        <button className={styles.close} onClick={handleButtonClick}>
          x
        </button>
        <h3 className={styles.name}>{results![0].name}</h3>
        <div className={styles.info}>
          <div>Year: {results![0].birth_year}</div>
          <div>Skin: {results![0].skin_color}</div>
          <div>Height: {results![0].height} cm</div>
          <div>Mass: {results![0].mass} kg</div>
          <div>Hair: {results![0].hair_color}</div>
          <div>Gender: {results![0].gender}</div>
        </div>
      </div>
    </section>
  );
}

export default DetailedItem;
