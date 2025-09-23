import React from 'react'
import { JobsProvider } from './components/Jobs/context/JobsContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Jobs from './components/Jobs/Jobs'

function App() {
  return (
    <JobsProvider>
      <>
        <div>
          <Navbar />
          <Jobs />
          <Footer />
        </div>
      </>
    </JobsProvider>
  )
}

export default App
