import React from "react";
//import Button from "react-bootstrap/Button";
//import { ButtonGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//import CardGroup from 'react-bootstrap/CardGroup';
//import Container from 'react-bootstrap/Container';


function Likes(props) {
  
  return (
    <div>
    <Card className={props.LikesName}>
      <Card style={{ width: "14rem" }}>
        <CardImg variant="top" src="pic1.jpg" />
        <CardBody className="Likes" id={props.LikesName}>
          <CardTitle>Climate Change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Melting Ice Caps
          </CardSubtitle>
          <Card.Text>We need to prevent the climate from overheating</Card.Text>
          <p>{props.count}</p>
          <Button className="Likes" onClick={() => props.incrementLikes()}>
            Likes
          </Button>
          
        </Card.Body>
      </Card>

     {/*} <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic4.jpg" />
        <Card.Body className="Likes" id={props.LikesName}>
          <Card.Title>Climate Change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Melting Ice Capsnnn
          </Card.Subtitle>
          <Card.Text>We need to prevent the climate from overheating</Card.Text>
          <p>{props.count}</p>
          <Button className="Likes" onClick={() => props.incrementLikes()}>
            Likes
          </Button>
          
        </Card.Body>
      </Card>
    </Card>
    <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic3.jpg" />
        <Card.Body className="Likes" id={props.LikesName}>
          <Card.Title>Climate Change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Melting Ice Capsmmm
          </Card.Subtitle>
          <Card.Text>We need to prevent the climate from overheating</Card.Text>
          <p>{props.count}</p>
          <Button className="Likes" onClick={() => props.incrementLikes()}>
            Likes
          </Button>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic2.jpg" />
        <Card.Body className="Likes" id={props.LikesName}>
          <Card.Title>Climate Change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Melting Ice Capssss
          </Card.Subtitle>
          <Card.Text>We need to prevent the climate from overheating</Card.Text>
          <p>{props.count}</p>
          <Button className="Likes" onClick={() => props.incrementLikes()}>
            Likes
          </Button>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic5.jpg" />
        <Card.Body className="Likes" id={props.LikesName}>
          <Card.Title>Climate Change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Melting Ice Capsttt
          </Card.Subtitle>
          <Card.Text>We need to prevent the climate from overheating</Card.Text>
          <p>{props.count}</p>
          <Button className="Likes" onClick={() => props.incrementLikes()}>
            Likes
          </Button>
          
        </Card.Body>
  </Card>*/}
    
    </div>
  );
}
export default Likes;