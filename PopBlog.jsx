import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PopBlog.module.css';

function PopBlog() {
  const [popularBlog, setPopularBlog] = useState(null);

  useEffect(() => {
    const fetchPopularBlog = async () => {
      try {
        const response = await axios.get('/api/popular-blog');
        setPopularBlog(response.data);
      } catch (error) {
        console.error('Error fetching popular blog:', error);
      }
    };

    fetchPopularBlog();
  }, []);

  return (
    <div className={styles.container}>
      {popularBlog ? (
        <>
          <h2>{popularBlog.title}</h2>
          <p>{popularBlog.content}</p>
          <p>Likes: {popularBlog.likes}</p>
        </>
      ) : (
        <p>Loading popular blog...</p>
      )}
      <div>
        <button className={styles.button}>Like</button>
        <button className={styles.button}>Comment</button>
        <button className={styles.button}>Share</button>
      </div>
    </div>
  );
}

export default PopBlog;
