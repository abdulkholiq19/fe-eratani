import React from 'react'
import TableComponent from '../components/TableComponent'

import {
  Container
} from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Container>
        <h3 className="text-center py-3 mt-5">
          Singel Page Application
        </h3>
        <TableComponent />
      </Container>
    </div>
  )
}
