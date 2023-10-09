import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
   <div style={{ marginTop: '85px' }}></div>
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
       
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/yasmeen2001234"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yasmeen-awwad-khaleel-02134a215/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Footer;
