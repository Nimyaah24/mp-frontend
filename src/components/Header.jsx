
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-body-transparent">
    <Container>
      <Navbar.Brand href="#home" className='text-white p-5'>
      <FontAwesomeIcon icon={faPlay} size="xl" style={{color: "#0c4de4",}} />
    <span className='ms-3 fs-5'><b>Media-Player</b> </span>   
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header