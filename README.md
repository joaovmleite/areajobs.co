# trampos.co / areajobs.co – Job Board

This repository contains the solution for a technical challenge involving a job board, developed with React and Vite. Here you'll find the technical decisions, project structure, main features, and execution instructions.

## Index

- [About the Project](#about-the-project)
- [Main Features](#main-features)
- [Design and Layout](#design-and-layout)
- [Technical Decisions](#technical-decisions)
- [Project Structure](#project-structure)
- [Validation and Security](#validation-and-security)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Final Considerations](#final-considerations)

---

## About the Project

The goal of this project is to create a web application to list and register job postings, using React, Vite, and Context API. The system allows users to view, filter, search, and register new job offers, with data persisted in a JSON file. The focus is to deliver a functional, clear, responsive, and easy-to-maintain solution.

## Main Features

- **Job Listing:** View job postings with details like title, company, contract type, location, salary, recruiter, and description.
- **Search and Filter:** Search by job title or company and filter by location (On-site, Remote, Hybrid).
- **New Job Registration:** Complete form to register a new job posting, with validation of required fields and XSS sanitization.
- **Context API:** Centralized job offers state, making it easy to share data and functions between components.
- **Responsive Interface:** Layout adapted for different screen sizes, with a clean and modern design.

## Design and Layout

The interface design was previously planned in Figma, with the creation of wireframes for all main screens of the system. The goal was to ensure a clear, intuitive, and responsive user experience aligned with the project’s purpose.

- **Wireframes:** Served as a visual guide for implementing components and navigation flows.
- **Visual Decisions:** Color palette, typography, and spacing defined for a modern and pleasant look.
- **Tool Used:** [Figma](https://figma.com/) for prototyping and visual documentation.

[Wireframe on Figma](https://www.figma.com/design/t2RBtA2UQ22fbk0LdJs7yZ/areajobs.co?node-id=0-1&t=5u3zaTBjghkNfweB-1)  

## Technical Decisions

- **Stack:** React + Vite, CSS Modules for styling, Context API for state management.
- **Componentization:** Separated into reusable components (Navbar, Footer, JobList, JobDetails, CreateJob).
- **Data Loading and Persistence:** Jobs are loaded from the `public/data/jobs.json` file and new jobs are registered in the global context (simulated persistence).
- **Validation and Security:** All form fields are required and user inputs are sanitized to prevent XSS.
- **Responsiveness:** Layout adapted for both desktop and mobile using modern CSS.


## Validation and Security

- **Required Field Validation:** The job registration form blocks submission of empty fields.
- **XSS Sanitization:** All user inputs are sanitized before being processed or displayed.
- **Instant Feedback:** Alerts are shown to the user in case of errors or successful submission.

## How to Run

1. **Prerequisites:**
    - Node.js (18+ recommended)
    - pnpm, npm, or yarn

2. **Installation:**
    ```bash
    pnpm install
    # or
    npm install
    # or
    yarn
    ```

3. **Development Mode:**
    ```bash
    pnpm dev
    # or
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## Screenshots

![Job Listings Page](https://i.postimg.cc/KvZY0LWD/snapshot-areajobs-listjobs.png)  
![Job Registration Page](https://i.postimg.cc/8zczSGNF/snapshot-areajobs-createjob.png)

