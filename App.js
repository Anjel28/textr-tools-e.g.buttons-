import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Navbar tittle="Text-tools"  aboutText="About "/>
    <div className="container" my-3>
        
        <TextForm heading="Enter the text  below" />
    </div>
      
    </>
  )
}

export default App
