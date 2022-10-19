import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from "../assets/react.svg"

const Header = () => {
  return (
  <Container className="text-center mt-4">
      <Image fluid src={logo} width="300px"></Image>
  </Container>
  )
}

export default Header
