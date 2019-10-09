import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/popular.css'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';


const Popular = (props) => {
  return (
    <div className="container-fluid">
      <h1>Popular with Cukurin Users</h1>
    <CardGroup className="animated bounce delay-1s">
    <Card className="cardpack" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Ian Shop</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button className="btn btn-warning">Read More</Button>
      </CardBody>
    </Card>
    <Card className="cardpack" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Nico Shop</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button className="btn btn-warning">Read More</Button>
      </CardBody>
    </Card>
    <Card className="cardpack" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Ian Shop</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button className="btn btn-warning">Read More</Button>
      </CardBody>
    </Card>
    <Card className="cardpack" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Auzan Shop</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span></CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button className="btn btn-warning">Read More</Button>
      </CardBody>
    </Card>
  </CardGroup>
  </div>
  );
};

export default Popular;