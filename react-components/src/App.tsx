import './styles/nullstyles.scss';
import styles from './app.module.scss';

import { Outlet } from 'react-router-dom';

import Search from './components/search';
import List from './components/list';
import ErrorButton from './components/errorButton';

function App() {
  return (
    <>
      <Search />
      <div className={styles.results}>
        <List />
        <Outlet />
      </div>
      <ErrorButton />
    </>
  );
}

export default App;
