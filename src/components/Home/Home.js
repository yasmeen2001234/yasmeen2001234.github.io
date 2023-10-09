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
              Passionate about 3D game development, I possess skill in crafting immersive game experiences with 
              dynamic mechanics 
              and realistic AI using Unity C#. Additionally,
              I create 3D web visualizations via React's powerful framework, 
              elevating user engagement through interactive and visually appealing content.

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
