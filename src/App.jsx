import Data from './data.json'
import './App.css'

import ResumeTitle from './ResumeTitle.jsx'
import ContactInfo from './ContactInfo.jsx'

function App() {
  return (
    <>
      <ResumeTitle {...Data.contact_info}/>
      <ContactInfo {...Data.contact_info}/>
    </>
  )
}

export default App
