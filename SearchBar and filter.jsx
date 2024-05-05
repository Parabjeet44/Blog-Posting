import React, { useState } from 'react';
import styles from './SearchBar and filter.module.css';

function SearchFilter() {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search the blog" className={styles.input} />
      <button className={styles.button}>Search</button>
      <br />
      <button onClick={handleFilterClick} className={styles.button}>
        <img
          src="https://imgs.search.brave.com/Hh1qGQQwMVS5eyQ0oPJI_bymtdv38QprEqXFAUbKE9U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzAzLzIwLzc4Lzg0LzM2MF9GXzMyMDc4ODQ3NV9uRWlMVlZpT0Jld2VhN3RhWldxTlVSMGxKQU1UQWFTby5qcGc"
          alt="Filter"
        />
        <p>Filter</p>
      </button>
      {showFilter && (
        <div className={styles.filterContainer}>
          <div className={styles.filterOption}>
            <input type="radio" name="filter" value="Like" checked />
            <label htmlFor="Like">By Like</label>
          </div>
          <div className={styles.filterOption}>
            <input type="radio" name="filter" value="Popular" />
            <label htmlFor="Popular">By Popularity</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
