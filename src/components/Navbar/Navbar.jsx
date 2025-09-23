import React from 'react';
import styles from './Navbar.module.css';
import { useJobs } from '../Jobs/context/JobsContext';

const Navbar = () => {
  const { setIsCreatingJob } = useJobs();

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          areajobs.co
        </a>
        <button className={styles.button} onClick={() => setIsCreatingJob(true)}>Create new Job</button>
      </div>
    </header>
  );
};

export default Navbar;
