import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe'
import {idBarberShop} from '../store/actions'

class barbershopDetail extends Component {
  componentDidMount() {
    console.log(this.props, 'props');
    this.props.getBarberShopAction(this.props.history);
    
  }
  render() {
    const style = {
      width: '100%',
      height: '400px',
      backgroundImage: `url('${this.props.barbershopData.imageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid gold'
    }
    const title = this.props.barbershopData.name;
    const address = this.props.barbershopData.address

    return (
      <div>
        <div className="container" style={{height: '1450px'}}>
        <div className="row">
             <div className="col" style={style}>
             </div>
          </div>
          <div className="row" style={{marginTop: '25px'}}>
            <section className="barbershop-name"> 
            <h1> {title}</h1>
            </section>    
          </div>
          <div className="row">
          <section className="barbershop-rate" style={{marginLeft: '25px'}}>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span> 
            </section>
            </div>
            <div className="row">
              <section className="barbershop-detail" style={{marginTop: '20px', marginLeft:'25px'}}>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos architecto iusto! Repudiandae nemo corrupti tempore. Beatae, vero? Alias eveniet ducimus laboriosam sapiente excepturi dolorum sint sunt rerum, necessitatibus tenetur delectus, enim quia eaque voluptatibus dolor nam officiis dolore.</h5>
              </section>
            </div>
            <div className="row" style={{marginTop: '20px', marginLeft:'10px'}}>
              <h5>Service :</h5>
            </div>
            <div className="col" style={{marginLeft: '30px'}}>
              <li>
                <Link style={{textDecoration: 'none', color:'gold'}}>Normal</Link>
              </li>
              <li>
                <Link style={{textDecoration: 'none', color:'gold'}}>Shaving</Link>
              </li>
            </div>
            <div className="row" style={{marginLeft: '35px', marginTop: '20px'}}>
            <button type="button" class="btn btn-warning">Book Now</button>
            </div>
            <div className="row" style={{marginTop: '20px', marginLeft:'10px'}}>
              <h6>{address}</h6>
            </div>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0355930263654!2d106.81321122201307!3d-6.2590419890469535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98abbfacdfba086a!2sTalents%20By%20Herman%20Coa!5e0!3m2!1sid!2sid!4v1571028291842!5m2!1sid!2sid" width="100%" height="500px" frameborder="0" allowfullscreen=""></Iframe>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, 'state');
  return {
    barbershopData: state.getBarberShop.barbershopData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBarberShopAction: () => dispatch(idBarberShop())
  };
};

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(barbershopDetail)

export default (connectComponent);
