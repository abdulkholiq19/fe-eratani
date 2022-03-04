import React from 'react'
import {
  Container,
  Card,
  Button,
  Image,
  Row,
  Col
} from 'react-bootstrap';
import Logo from "../assets/logo-eratani.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar  } from "@fortawesome/free-regular-svg-icons";
import {  faTiktok, faInstagram , faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

export const FooterComponent = () => {
  return (
    <div>
      <Card className="footer py-5">
        <Container>
          <Card.Body>
            <Image
              src={Logo}
              className="image-footer"
            />
            <Row className="py-3">
              <Col>
                <Card.Text className="text-white">
                  Jl. Casablanca Raya Kav 88, Kel.<br />
                  Menteng Dalam, Kec. Tebet, Gedung<br />
                  Pakuwon Tower Lt 26 Unit J, Jakarta<br />
                  Selatan DKI Jakarta 12870, Indonesia
                </Card.Text>
                <Card.Text className="text-white mt-5">
                  Email : info.eratani@eratani.co.id
                </Card.Text>
                <Card.Text className="text-white">
                  Telepon : +62 811 952 2577
                </Card.Text>
              </Col>
              <Col>
                <Card.Title className="text-white mb-4">
                  <h3>Menu</h3>
                </Card.Title>
                <Card.Text className="text-white">
                  Tim Kami
                </Card.Text>
                <Card.Text className="text-white">
                  Mitra Eratani
                </Card.Text>
                <Card.Text className="text-white">
                  Tips & Berita Pertanian
                </Card.Text>
                <Card.Text className="text-white">
                  Karir
                </Card.Text>
              </Col>
              <Col className="text-center">
                <Row>
                  <Col className='mb-5 d-flex justify-content-center'>
                    <FontAwesomeIcon size="xl" className="text-white p-2" icon={faGlobeAsia} /> &nbsp;
                    <h4 className="icon-footer-in">IN</h4> &nbsp;
                    <h4 className="icon-footer-en">EN</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className='mt-5'>
                    <FontAwesomeIcon size="xl" className="text-white p-3" icon={faTiktok} /> 
                    <FontAwesomeIcon size="xl" className="text-white p-3" icon={faInstagram} /> 
                    <FontAwesomeIcon size="xl" className="text-white p-3" icon={faLinkedin} /> 
                    <FontAwesomeIcon size="xl" className="text-white p-3" icon={faYoutube} /> 
                    <FontAwesomeIcon size="xl" className="text-white p-3" icon={faWhatsapp} /> 
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          <Card.Text className="text-white text-center mt-5">
            Copyright © 2021 by PT Eratani Teknologi Nusantara 
          </Card.Text>
        </Container>
      </Card>
    </div>
  )
}
