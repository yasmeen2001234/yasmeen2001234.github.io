import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/controller.svg";
import home2Logo from "../../Assets/homeewy.png";

import Projects from "../Projects/Projects";

import Tilt from "react-parallax-tilt";


function Home() {
  return (
    <section>
     
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          
          <Row>
            <Col md={7} className="home-header">
           

              <h1 className="heading-name">
             
                <strong className="main-name"> Yasmeen Awwad</strong>
              </h1>
              
              <h2 style={{ fontSize: "16em" }} className="home-about-body">
              I'm a dedicated Unity C# developer with a deep passion for creating immersive, 
              interactive experiences. My journey in game development began with a strong love for Unity, 
              and it has been the driving force behind my work.

              </h2>
             
            </Col>
         
            <Col md={5} style={{ paddingBottom: 20 }} >
            <Tilt>
              <img src={homeLogo} className="img-fluid" style={{ width: '3500px', height: 'auto' }} alt="logo" />
            
            </Tilt>
          
              
              <img src={home2Logo}  className="img-overlay" alt="logo" />
            
        
            </Col>
          
          </Row>

        </Container>
   
      </Container>
      
      <div style={{ marginTop: '85px' }}></div>
      <Projects />
   

    </section>
  );
}

export default Home;
