import styles from './error.module.scss';

function ErrorPage() {
  return (
    <div className={styles.error}>
      <div className={styles.body}>
        <h1 className={styles.title}>Error has occured</h1>
        <div className={styles.text}>please, refresh the page</div>
      </div>
    </div>
  );
}

export default ErrorPage;
