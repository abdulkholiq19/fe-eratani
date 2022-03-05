import React from 'react';
import {
  Modal,
  Button,
  Row,
  Col
} from "react-bootstrap"

const ModalDetailComponent = (props) => {
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
            Data {props.data.first_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={2}>
              <h5>First Name </h5>
            </Col>
            <Col>
              <h5>:  &nbsp; {props.data.first_name}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <h5>Last Name </h5>
            </Col>
            <Col>
              <h5>:  &nbsp; {props.data.last_name}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <h5>Email </h5>
            </Col>
            <Col>
              <h5>:  &nbsp; {props.data.email}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <h5>Gender</h5>
            </Col>
            <Col>
              <h5>: &nbsp; {props.data.gender}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <h5>Ip Address </h5>
            </Col>
            <Col>
              <h5>:  &nbsp; {props.data.ip_address}</h5>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default ModalDetailComponent