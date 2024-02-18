import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
console.log('NavBar component is here!');
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/movies?query=${searchQuery}`);
  };

  console.log('NavBar rendered');

  return (
    <nav className={styles.navBar}>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default NavBar;
