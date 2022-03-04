import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Image,
  Button
} from "react-bootstrap";

export const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image
              src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/93c1b6ce4b8ddd80e65862d5b4788ac8.png"
              className="navbar-image"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link href="#beranda">Tentang Kami</Nav.Link>
              <Nav.Link href="#action3">Tips & Berita Pertanian</Nav.Link>
              <Nav.Link href="#kegiatan">Kegiatan</Nav.Link>
              <Nav.Link href="#action5">
              <Button variant="warning" className="px-4">Mitra Petani</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
