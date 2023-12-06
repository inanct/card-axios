import React from 'react'
import NavBarCom from "./components/NavBarCom"
import Contacts from './components/Contacts'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div >
      <NavBarCom/>
      <Container>
        <Contacts/>
      </Container>
      
    </div>
  )
}

export default App
