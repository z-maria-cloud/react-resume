import Data from './data.json'
import './App.css'

import ResumeTitle from './ResumeTitle.jsx'
import ContactInfo from './ContactInfo.jsx'
import Skills from './Skills.jsx'
import Job from './Job.jsx'
import Training from './Training.jsx'

function App() {
  console.log(Data.jobs)
  return (
    <>
      <ResumeTitle {...Data.contact_info}/>
      <ContactInfo {...Data.contact_info}/>
      <Skills skills={Data.skills} />
      {Data.jobs.map((job) => <Job key={job.title} {...job} />)}
      {Object.keys(Data.qualifications).map((year) => <Training key={year} year={year} qualifications={Data.qualifications[year]} />)}
    </>
  )
}

export default App
