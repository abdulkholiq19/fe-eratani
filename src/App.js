import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './components/NavbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FooterComponent } from './components/FooterComponent';

import {
  Navbar,
  Container,
  Nav,
  Image,
  Card,
  Row,
  Col,
  Button
} from "react-bootstrap";

function App() {
  return (
    <div>
      <NavbarComponent />
        <Card className="shadow-md">
          <Image
            id="beranda"
            src="https://media-exp1.licdn.com/dms/image/C561BAQF-niw2U0aSjQ/company-background_10000/0/1636555866618?e=2159024400&v=beta&t=-eOC_6LjJCWKn_LztsSKDw4awWubPNoYgfvAiHQtvgc"
            className="shadow-image w-100"
          />
        </Card>
        <div className="my-5">
          <h1 id="kegiatan" className="text-title">Kegiatan</h1>
        </div>
        <div className="my-5">
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C5622AQGKH0T09LvJ7A/feedshare-shrink_800/0/1630495484747?e=1648684800&v=beta&t=rIv2jnSG1NUAWNCVXhY_J3dOAuAmmOJ0YpZVXLf8rZE"
                  className="w-100"
                />
              </Col>
              <Col>
              <div className="d-flex">
                <p className="color-grey">
                  <FontAwesomeIcon icon={faCalendar} /> &nbsp;
                </p>
                <p className="color-grey">8 Agustus 2021</p>
              </div>
                <h1 className="mb-4">Pemberian Edukasi Kepada Petani Binaan Eratani di Cantigi</h1>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
                  <div className="d-flex flex-row-reverse">
                    <Button variant="warning">Baca Selengkapnya</Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-5">
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C5622AQGKH0T09LvJ7A/feedshare-shrink_800/0/1630495484747?e=1648684800&v=beta&t=rIv2jnSG1NUAWNCVXhY_J3dOAuAmmOJ0YpZVXLf8rZE"
                  className="w-100"
                />
              </Col>
              <Col>
              <div className="d-flex">
                <p className="color-grey">
                  <FontAwesomeIcon icon={faCalendar} /> &nbsp;
                </p>
                <p className="color-grey">8 Agustus 2021</p>
              </div>
                <h1 className="mb-4">Pemberian Edukasi Kepada Petani Binaan Eratani di Cantigi</h1>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
                  <div className="d-flex flex-row-reverse">
                    <Button variant="warning">Baca Selengkapnya</Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-5">
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C5622AQGKH0T09LvJ7A/feedshare-shrink_800/0/1630495484747?e=1648684800&v=beta&t=rIv2jnSG1NUAWNCVXhY_J3dOAuAmmOJ0YpZVXLf8rZE"
                  className="w-100"
                />
              </Col>
              <Col>
              <div className="d-flex">
                <p className="color-grey">
                  <FontAwesomeIcon icon={faCalendar} /> &nbsp;
                </p>
                <p className="color-grey">8 Agustus 2021</p>
              </div>
                <h1 className="mb-4">Pemberian Edukasi Kepada Petani Binaan Eratani di Cantigi</h1>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
                  <div className="d-flex flex-row-reverse">
                    <Button variant="warning">Baca Selengkapnya</Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-5">
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C5622AQGKH0T09LvJ7A/feedshare-shrink_800/0/1630495484747?e=1648684800&v=beta&t=rIv2jnSG1NUAWNCVXhY_J3dOAuAmmOJ0YpZVXLf8rZE"
                  className="w-100"
                />
              </Col>
              <Col>
              <div className="d-flex">
                <p className="color-grey">
                  <FontAwesomeIcon icon={faCalendar} /> &nbsp;
                </p>
                <p className="color-grey">8 Agustus 2021</p>
              </div>
                <h1 className="mb-4">Pemberian Edukasi Kepada Petani Binaan Eratani di Cantigi</h1>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
                  <div className="d-flex flex-row-reverse">
                    <Button variant="warning">Baca Selengkapnya</Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-5">
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C5622AQGKH0T09LvJ7A/feedshare-shrink_800/0/1630495484747?e=1648684800&v=beta&t=rIv2jnSG1NUAWNCVXhY_J3dOAuAmmOJ0YpZVXLf8rZE"
                  className="w-100"
                />
              </Col>
              <Col>
              <div className="d-flex">
                <p className="color-grey">
                  <FontAwesomeIcon icon={faCalendar} /> &nbsp;
                </p>
                <p className="color-grey">8 Agustus 2021</p>
              </div>
                <h1 className="mb-4">Pemberian Edukasi Kepada Petani Binaan Eratani di Cantigi</h1>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
                  <div className="d-flex flex-row-reverse">
                    <Button variant="warning">Baca Selengkapnya</Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-5">
          <h4 className="text-link">Lihat Lainnya</h4>
        </div>
        <FooterComponent />
    </div>
  );
}

export default App;
