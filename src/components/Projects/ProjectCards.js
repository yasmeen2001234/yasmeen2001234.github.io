import React from "react";
import Card from "react-bootstrap/Card";

import YouTube from 'react-youtube';
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
     
     <YouTube
          videoId={props.videoId}
          opts={{
            width: "100%", // Adjust the width as needed
            height: "300px", // Adjust the height as needed
            playerVars: {
              // You can add playerVars if needed
            },
          }}
        />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
