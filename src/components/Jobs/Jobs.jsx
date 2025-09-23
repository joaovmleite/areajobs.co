import React, { useState, useEffect } from 'react';
import styles from './modules/Jobs.module.css';
import JobList from './JobList';
import JobDetails from './JobDetails';
import CreateJob from './CreateJob';
import { useJobs } from './context/JobsContext';


const Jobs = () => {
  const { selectedJob, isCreatingJob } = useJobs();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 748);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile && !isCreatingJob) {
    return (
      <main className={styles.jobsContainer}>
        {selectedJob ? <JobDetails job={selectedJob} /> : <JobList />}
      </main>
    );
  }

  return (
    <main className={styles.jobsContainer}>
      {isCreatingJob ? (
        <CreateJob />
      ) : (
        <>
          <JobList />
          {selectedJob && <JobDetails job={selectedJob} />}
        </>
      )}
    </main>
  );
};

export default Jobs;
