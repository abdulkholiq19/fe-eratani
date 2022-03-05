import React from 'react'

import {
  Modal,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { API } from "../config/API"

const ModalDeleteComponent = (props) => {
  const { data, onHide } = props;
  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`users/${id}.json?key=10086d00`);
      if(response.status === 200){
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
            Are You Sure ?
          </Modal.Title>
          <p className="text-center">
          I will not close if you click outside me. Don't even try to press
          escape key.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col>
              <Button variant="danger" type="submit" onClick={() => handleDelete(data.id)}>
                Delete
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={onHide}>Close</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ModalDeleteComponent