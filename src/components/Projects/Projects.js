import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section" spacing={102}>
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects I've worked on.
        </p>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" , gap: "55px" }} >
          <Col
            md={4}
            className="project-card"
            style={{ width: "600px", height: "600px" }}
          >
            <ProjectCard
            
              videoId="8e2T5qfsLPE"
              isBlog={false}
              title="Education in the metaverse"
              description={
                <div>
                  <p style={{ lineHeight: 3 }}>
                    A VR multiplayer application that represents the education
                    system in the metaverse with XR Unity.
                  </p>
                  <ul style={{ lineHeight: 2 }}>
                    <li>
                      Creating multi-interactions between users with a
                      client-server networking type (Photon)
                    </li>
                    <li>Implementing user XR interactions</li>
                    <li>Physics and Animation</li>
                    <li>Designing scene environment</li>
                  </ul>
                </div>
              }
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
     
          <Col
            md={4}
            className="project-card"
            style={{ width: "600px", height: "600px" }}
          >  
            <ProjectCard
             style={{ paddingBottom: "20px"}}
              videoId="LVCWeeGUJ4Y"
              isBlog={false}
              title="Zombie survival game"
              description={
                <div>
                <p style={{ lineHeight: 3 }}>
                    A first-person shooter (FPS) game centered around a zombie
                    apocalypse theme.
                  </p>
                  <ul style={{ lineHeight: 2 }}>
                    <li>Implementing shooting Raycast mechanics</li>
                    <li>
                      Designing AI behavior for zombies and implementing
                      pathfinding.
                    </li>
                    <li>Implementing animations, managing collision physics</li>
                    <li>Lighting and sound effects</li>
                    <li>WebGL compatible </li>
                  </ul>
                  <Button
                    className="demo-button"
                   
                    target="_blank"
                    style={{ marginLeft: "215px" }}
                    href={"https://yasmeen-awwad.itch.io/zombie-horde"}
                  >
                    Demo
                  </Button>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
