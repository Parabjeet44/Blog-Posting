import Toggle from './Toggle';
import SearchFilter from './SearchBar and filter';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Toggle />
      <SearchFilter />
    </nav>
  );
}

export default Nav;
