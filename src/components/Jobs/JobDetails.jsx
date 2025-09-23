
import React from 'react';
import styles from './modules/Jobs.module.css';
import { useJobs } from './context/JobsContext';

const JobDetails = ({ job }) => {
  const { setSelectedJob } = useJobs();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 748;

  if (!job) return <div className={styles.rightPanel}>Select a job to see details.</div>;

  return (
    <div className={styles.rightPanel}>
      {isMobile && (
        <button
          style={{
            marginBottom: '1rem',
            background: '#FF8C00',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 18px',
            fontWeight: 600,
            fontFamily: 'Jost, sans-serif',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={() => setSelectedJob(null)}
        >
          Voltar
        </button>
      )}
      <div className={styles.detailsHeader}>
        <h2 className={styles.detailsTitle}>{job.Title}</h2>
        <p className={styles.detailsMeta}>{job.Company} &middot; Published at {job.PublishedAt} &middot; {job.Salary}</p>
      </div>
      <div className={styles.detailsDescription}>
        <p>{job.Description}</p>
      </div>
      <div className={styles.detailsContact}>
        <div className={styles.recruiterInfo}>
          <p className={styles.recruiterName}>{job.Publicant}</p>
          <p className={styles.recruiterEmail}>{job.Contact}</p>
        </div>
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className={styles.applyButton}>Apply Now</a>
      </div>
    </div>
  );
};

export default JobDetails;
