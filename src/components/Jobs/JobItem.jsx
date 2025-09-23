import React from 'react';
import { useJobs } from './context/JobsContext';
import styles from './modules/Jobs.module.css';

const JobItem = ({ job }) => {
  const { selectedJob, setSelectedJob } = useJobs();
  const isSelected = selectedJob && selectedJob.Id === job.Id;

  const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  const handleClick = () => {
    setSelectedJob(job);
    if (window.innerWidth <= 748) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`${styles.jobItem} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      <div className={styles.jobItemHeader}>
        <h3 className={styles.jobTitle}>{job.Title}</h3>
        <div className={styles.jobTags}>
          <span className={`${styles.tag} ${styles[job.Contracting.replace('-','')]}`}>{job.Contracting}</span>
          <span className={`${styles.tag} ${styles[job.Locality.replace('-','')]}`}>{job.Locality}</span>
        </div>
      </div>
      <p className={styles.jobSummary}>{truncate(job.Description, 100)}</p>
    </div>
  );
};

export default JobItem;

