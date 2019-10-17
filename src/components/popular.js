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
import { getBarberShop } from '../store/actions'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class Popular extends React.Component {
  componentDidMount() {
    
    this.props.getAllBarbershop(this.props.history)
    
  }
  handleMove = (id, history) => {
    this.props.getBarberShop(id, history)
  console.log(this.props, 'aa props');
  console.log(this.props.history, 'history');
  
  }
  

  render() {
   
   const {shops} = this.props.shops
    
   
   let list = shops.slice(0, 4).map(shop => {     
     return(
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
            
          </CardBody>
          <Button onClick={()=>this.handleMove(shop._id, this.props.history)} className="btn btn-warning" type="button">Read More</Button>{" "}
          
          
        </Card>
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
    shops: state.shops,
    barbershop: state.barbershop
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllBarbershop: () => dispatch(getAllBarbershop()),
    getBarberShop : (id, history) => dispatch(getBarberShop(id, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Popular))
