import React, { useState } from 'react';
import styles from './signupPage.module.css';
import User from '.node/mongoDBConnect/User';
import LoginPage from'./Login';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (email === '') {
      alert('Enter a valid email');
    } else if (password === '') {
      alert('Enter a valid password');
    } else if (password.length < 8) {
      alert('Password must be at least 8 characters long');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      try {
        const newUser = new User({ email, password });
        await newUser.save();
        alert('Signup successful');
      } catch (err) {
        console.error('Error saving user:', err);
        alert('Failed to sign up');
      }
    }
  };

  // Render the component's JSX
  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSignup} className={styles.button}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
