import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/popular.css'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom'


const Popular = (props) => {
  return (
    <div className="container-fluid">
      <h1>Popular with Cukurin Users</h1>
    <CardGroup>
    <Card className="cardpack wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.5s" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Ian Barbershop</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Link to='/search'> <Button className="btn btn-warning">Read More</Button> </Link>
      </CardBody>
    </Card>
    <Card className="cardpack wow bounceInDown" data-wow-duration="2s" data-wow-delay="1s" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Nico Cukur</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button className="btn btn-warning">Read More</Button>
      </CardBody>
    </Card>
    <Card className="cardpack wow bounceInDown" data-wow-duration="2s" data-wow-delay="1.5s" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Ido BarberShop</CardTitle>
        <CardSubtitle><span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button className="btn btn-warning">Read More</Button>
      </CardBody>
    </Card>
    <Card className="cardpack wow bounceInDown" data-wow-duration="2s" data-wow-delay="2s" style={{margin: '10px', border: '1px solid black'}}>
      <CardImg top width="100%" src="assets/pp.jpeg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Auzan Semir</CardTitle>
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