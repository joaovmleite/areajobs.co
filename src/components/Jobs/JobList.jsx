import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useJobs } from './context/JobsContext';
import styles from './modules/Jobs.module.css';
import JobItem from './JobItem';

const JobList = () => {
  const {
    jobs,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    loadMoreJobs,
    hasMoreJobs,
  } = useJobs();
  const scrollContainerRef = useRef(null);
  const listEndRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMoreJobs && !isLoading) {
      setIsLoading(true);
      loadMoreJobs();
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [hasMoreJobs, isLoading, loadMoreJobs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleObserver,
      {
        root: scrollContainerRef.current,
        rootMargin: '100px',
        threshold: 0,
      }
    );

    const endElement = listEndRef.current;
    if (endElement) {
      observer.observe(endElement);
    }

    return () => {
      if (endElement) {
        observer.unobserve(endElement);
      }
    };
  }, [handleObserver]);

  return (
    <div className={styles.leftPanel}>
      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search job..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className={styles.filterSelect}>
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>
      <div className={styles.jobList} ref={scrollContainerRef}>
        {jobs.map(job => <JobItem key={job.Id} job={job} />)}
        <div ref={listEndRef} style={{ height: '1px' }} />
        {isLoading && hasMoreJobs && <p className={styles.loading}>Loading more jobs...</p>}
      </div>
    </div>
  );
};

export default JobList;
