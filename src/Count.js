import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';

function Count() {
const [count, setCount] = useState(0);
  return (
    <CardGroup>
        
    <Card className="cards">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="pic1.jpg" />
        <Card.Body className="Likes1" >
          <Card.Title>Nature</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text> Protect nature by reducing deforestation.</Card.Text>
          
          <p>{count}</p>
          
        <Button onClick={() => setCount(count + 1)}>
        Like
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="pic2.jpg" />
        <Card.Body className="Likes2" >
          <Card.Title>Oceans</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text>Clean up our oceans and protect sealife</Card.Text>
          <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>
        Like
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="pic3.jpg" />
        <Card.Body className="Likes3" >
          <Card.Title> Waste</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            
          </Card.Subtitle>
          <Card.Text>Reduce waste by recycling and reusing.</Card.Text>
          <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>
        Like
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="pic4.jpg" />
        <Card.Body className="Likes4" >
          <Card.Title>Climate change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text>Prevent the climate from overheating</Card.Text>
          <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>
        Like
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic5.jpg" />
        <Card.Body className="Likes5" >
          <Card.Title>Air Pollution</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text>Reduce emissions from fossil fuels </Card.Text>
          <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>
        Like
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      
      </CardGroup>  
  );
}
export default Count;
