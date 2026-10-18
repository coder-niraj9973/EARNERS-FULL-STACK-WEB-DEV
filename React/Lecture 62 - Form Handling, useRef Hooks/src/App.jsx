import { useState } from 'react'
import './App.css'
import ControlledComponent from './components/ControlledComponent'
import UncontrolledComponent from './components/UncontrolledComponent'

function App() {
  
  return (
    <>
      <ControlledComponent/>
      <UncontrolledComponent/>
    </>
  )
}

export default App
