import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/popular.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { getAllBarbershop } from '../store/actions'

import { connect } from 'react-redux'

class Popular extends React.Component {
  componentDidMount() {
    
    this.props.getAllBarbershop()
    
  }

  render() {
   
   const {shops} = this.props.shops
    
   console.log({shops}, 'awdawd');
   
   let list = shops.slice(0, 4).map(shop => {
     return(
      //  <div>
      //    <div className="container-popular">
      
        <Card
          className="cardpack wow bounceInDown"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
          style={{ margin: "10px", border: "1px solid black" }}
        >
          <CardImg top width="100%" style={{height: '250px', backgroundSize: 'cover'}} src={shop.imageUrl} alt="Card image cap" />
          <CardBody>
            <CardTitle>{shop.name}</CardTitle>
            <CardSubtitle>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </CardSubtitle>
            <CardText>
              {shop.phoneNumber}
            </CardText>
            <Link to="/search">
              {" "}
              <Button className="btn btn-warning">Read More</Button>{" "}
            </Link>
          </CardBody>
        </Card>
      
    // </div>
    //    </div>
     )
   })
   return(
     <div>
      <Fade left>
        <h1 className='title-popular'>Popular with Cukurin Users</h1>
      </Fade>
      <div className="container-fluid">
        <div className="row">
       <div className="col-auto mr-auto">
       <CardGroup className="containerCardPopular">
       {list}
       </CardGroup>
       </div>
       </div>
       </div>
     </div>
   )
};
}

const mapStateToProps = state => {
  return {
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllBarbershop: () => dispatch(getAllBarbershop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
