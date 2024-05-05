// Addblog.jsx
import React, { useState } from 'react';
import styles from './Addblog.module.css';

function AddBlog() {
  const [blog, setBlog] = useState('');

  const addBlogHandler = () => {
    if (blog.trim() === '') {
      alert('Please enter your blog');
    } else {
      // Call API to add blog
      alert('Your blog is added');
      setBlog('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add Your Blog</h1>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your blog's Heading"
        name="heading"
        className={styles.input}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter Your Blog"
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
        className={styles.input}
      />
      <br />
      <br />
      <button onClick={addBlogHandler} className={styles.button}>
        Add Your Blog
      </button>
    </div>
  );
}

export default AddBlog;
