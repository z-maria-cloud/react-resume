import Data from './data.json'
import './App.css'

import ResumeTitle from './ResumeTitle.jsx'
import ContactInfo from './ContactInfo.jsx'
import Skills from './Skills.jsx'
import Job from './Job.jsx'
import Training from './Training.jsx'
import Languages from './Languages.jsx'

function App() {
  console.log(Data.languages)
  return (
    <>
      <ResumeTitle {...Data.contact_info}/>
      <ContactInfo {...Data.contact_info}/>
      <Skills skills={Data.skills} />
      <h2>Esperienze Lavorative</h2>
      {Data.jobs.map((job) => <Job key={job.title} {...job} />)}
      <h2>Istruzione e Formazione</h2>
      {Object.keys(Data.qualifications).map((year) => <Training key={year} year={year} qualifications={Data.qualifications[year]} />)}
      <Languages languages={Data.languages} />
      <p>Autorizzo il trattamento dei miei dati personali ai sensi del Dlgs 196 del 30 giugno 2003 e dell'art. 13 GDPR</p>
    </>
  )
}

export default App
