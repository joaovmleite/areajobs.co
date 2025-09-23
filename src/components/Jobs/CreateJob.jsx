import React, { useState } from 'react';
import { useJobs } from './context/JobsContext';
import styles from './modules/CreateJob.module.css';

const sanitizeInput = (input) => {
  const temp = document.createElement('div');
  temp.textContent = input;
  return temp.innerHTML;
};

const CreateJob = () => {
  const { setIsCreatingJob, setAllJobs } = useJobs();
  const [formData, setFormData] = useState({
    Title: '',
    Company: '',
    Contracting: 'Full-time',
    Locality: 'On-site',
    Salary: '',
    Publicant: '',
    Contact: '',
    Description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setIsCreatingJob(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key].trim() === '') {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    const applyLink = window.prompt("Please provide the link for the job application:");
    if (!applyLink) {
      alert("Job creation cancelled. Application link is required.");
      return;
    }

    if (!applyLink.startsWith('http://') && !applyLink.startsWith('https://')) {
      alert("Please provide a valid link starting with http:// or https://");
      return;
    }

    const sanitizedData = Object.entries(formData).reduce((acc, [key, value]) => {
      acc[key] = sanitizeInput(value);
      return acc;
    }, {});

    const newJob = {
      ...sanitizedData,
      applyLink: sanitizeInput(applyLink),
      Id: crypto.randomUUID(),
      PublishedAt: new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(new Date()),
    };

    try {
      setAllJobs(prevJobs => [newJob, ...prevJobs]);
      alert('Job created successfully!');
      
      setFormData({
        Title: '',
        Company: '',
        Contracting: 'Full-time',
        Locality: 'On-site',
        Salary: '',
        Publicant: '',
        Contact: '',
        Description: '',
      });
      setIsCreatingJob(false);
    } catch (error) {
      console.error("Failed to create job:", error);
      alert('Failed to create job. See console for details.');
    }
  };

  return (
    <form className={styles.createJobContainer} onSubmit={handleSubmit}>
      <div className={styles.leftForm}>
        <div className={styles.formGroup}>
          <label className={styles.formTitle}>What is the advertised vacancy?</label>
          <input type="text" name="Title" placeholder='Senior Software Engineer' value={formData.Title} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label>What is the name of the advertising company or person?</label>
          <input type="text" name="Company" placeholder='Amazon AWS' value={formData.Company} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label>What is the intended working model?</label>
          <select name="Contracting" value={formData.Contracting} onChange={handleChange}>
            <option>Full-time</option>
            <option>Contract</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>What is the work regime?</label>
          <select name="Locality" value={formData.Locality} onChange={handleChange}>
            <option>On-site</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>What is the desired salary range for the position?</label>
          <input type="text" name="Salary" placeholder='$2,000 - $6,000' value={formData.Salary} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label>Who is the recruiter responsible for the vacancy?</label>
          <input type="text" name="Publicant" placeholder='Rafaella Bragança' value={formData.Publicant} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label>What is the responsible contact email?</label>
          <input type="email" name="Contact" placeholder='rh@company.com' value={formData.Contact} onChange={handleChange} required />
        </div>
      </div>
      <div className={styles.rightForm}>
        <div className={`${styles.formGroup} ${styles.descriptionGroup}`}>
          <label>Write a suitable description for the desired position</label>
          <textarea name="Description" value={formData.Description} onChange={handleChange} required />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.sendButton}>Send</button>
          <button type="button" className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default CreateJob;