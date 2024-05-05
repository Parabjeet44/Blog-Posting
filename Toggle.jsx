import React, { useState, useEffect } from 'react';
import Signup from './signupPage';
import Addblog from './Addblog';
import styles from './Toggle.module.css';

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <button onClick={handleToggle} className={styles.toggleButton}>
        <img
          src="https://imgs.search.brave.com/GI73HpsVG_tmvUm-M4S8O8oResVddlheX1wRs5MB_Hc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0aWMtMDAuaWNvbmR1Y2suY29tL2Fzc2V0cy4wMC9tZW51LWljb24tMjU2eDIyMC14bjRxZ3V1OC5wbmc"
          alt="Icon"
          className={styles.toggleIcon}
        />
      </button>
      {toggle && (
        <div className={styles.menuContainer}>
          <div>
          <Link to="/" className={`${styles.menuButton} Home`}>
              Home
            </Link>
            <button className={`${styles.menuButton} Home`}>Home</button>
            {isAuthenticated && (
              <button className={`${styles.menuButton} 'Add Blog'`} onClick={Addblog}>
                Add Blog
              </button>
            )}
            <button className={`${styles.menuButton} signup`} onClick={Signup}>
              Signup
            </button>
          </div>
        </div>
      )}
      {showLogin && <Login />}
    </div>
  );
}

export default Toggle;
