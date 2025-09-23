import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';

const JobsContext = createContext();

const JOBS_PER_PAGE = 10;
const JOBS_TO_LOAD = 5;

export const JobsProvider = ({ children }) => {
  const [allJobs, setAllJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isCreatingJob, setIsCreatingJob] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [visibleCount, setVisibleCount] = useState(JOBS_PER_PAGE);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/data/jobs.json');
        const data = await response.json();
        setAllJobs(data);
        // Set the first job as selected by default
        if (data.length > 0) {
          setSelectedJob(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      const matchesSearch = job.Title.toLowerCase().includes(searchTerm.toLowerCase()) || job.Company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || job.Locality.toLowerCase() === filterType.toLowerCase();
      return matchesSearch && matchesType;
    });
  }, [allJobs, searchTerm, filterType]);

  useEffect(() => {
    setDisplayedJobs(filteredJobs.slice(0, visibleCount));
  }, [filteredJobs, visibleCount]);

  const loadMoreJobs = useCallback(() => {
    if (visibleCount < filteredJobs.length) {
      setVisibleCount(prevCount => Math.min(prevCount + JOBS_TO_LOAD, filteredJobs.length));
    }
  }, [visibleCount, filteredJobs.length]);

  const hasMoreJobs = visibleCount < filteredJobs.length;

  const value = {
    jobs: displayedJobs,
    selectedJob,
    setAllJobs,
    setSelectedJob,
    isCreatingJob,
    setIsCreatingJob,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    loadMoreJobs,
    hasMoreJobs,
    totalJobs: filteredJobs.length,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobsProvider');
  }
  return context;
};
