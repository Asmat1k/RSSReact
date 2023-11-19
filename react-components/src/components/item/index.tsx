import styles from './item.module.scss';
import { ApiItem } from '../../types/types';
import { Link } from 'react-router-dom';

interface ItemProps {
  data: ApiItem;
  myKey: number;
}

function Item({ data, myKey }: ItemProps) {
  return (
    <Link to={`details/${data.name}`} className={styles.link}>
      <li key={myKey} className={styles.item}>
        <h3 className={styles.name}>{data.name}</h3>
        <div className={styles.info}>
          <div>
            <span className={styles.characteristic}>Gender:</span>
            {data.gender}
          </div>
          <div>
            <span className={styles.characteristic}>Height:</span>
            {data.height} cm
          </div>
          <div>
            <span className={styles.characteristic}>Mass:</span>
            {data.mass} kg
          </div>
          <div>
            <span className={styles.characteristic}>Year:</span>
            {data.birth_year}
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Item;
