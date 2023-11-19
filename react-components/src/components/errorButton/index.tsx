import { useEffect, useState } from 'react';
import styles from './errorButton.module.scss';

function ErrorButton() {
  const [error, setError] = useState<boolean>(false);

  function handleErrorButtonClick() {
    setError(!error);
  }

  useEffect(() => {
    if (error) {
      throw new Error('Error test button clicked');
    }
  }, [error]);

  return (
    <button
      className={styles.errorBtn}
      onClick={() => handleErrorButtonClick()}
    >
      error
    </button>
  );
}

export default ErrorButton;
