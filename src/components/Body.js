import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import Sidebar from './Sidebar'

export default function Body({sidebar, children}) {
  return (
    <Container>
     <Stack direction="horizontal" className='Body'>
        {sidebar && <Sidebar />}
        <Container className='content'>
            {children}
        </Container>
    </Stack> 
    </Container>
  )
}
