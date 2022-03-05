import React, { useState } from 'react'

import {
  Modal,
  Button,
  Row,
  Col,
  Form
} from "react-bootstrap";
import { API } from "../config/API"

const ModalFormComponent = (props) => {
  const { isEdit, data, onHide, handleChange, form } = props;
  const handleAdd = async () => {
    try {
      const response = await API.post('/users.json?key=10086d00', form);
      if(response.status === 200){
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async (id) => {
    try {
      const response = await API.patch(`users/${id}.json?key=10086d00`, data);
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
          <Modal.Title id="contained-modal-title-vcenter">
            {isEdit === true ? `Update Data` : 'Add Data'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              placeholder="Enter first name"
              value={isEdit === true ? data.first_name : form.first_name}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              placeholder="Enter last name"
              value={isEdit === true ? data.last_name : form.last_name}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={isEdit === true ? data.email : form.email}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter gender"
              name="gender"
              value={isEdit === true ? data.gender : form.gender}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ip Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ip address"
              name="ip_address"
              value={isEdit === true ? data.ip_address : form.ip_address}
              onChange={handleChange}
              />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col>
            {
              isEdit === true ?
              <Button variant="primary" type="submit" onClick={() => handleUpdate(data.id)}>
                Save
              </Button>
              : 
              <Button variant="primary" type="submit" onClick={() => handleAdd()}>
              Submit
            </Button>

            }
            </Col>
            <Col>
              <Button onClick={onHide}>Close</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalFormComponent