import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'
import {getBarberShop} from '../store/actions'
import AppointmentModal from './appointmentModal';

class barbershopDetail extends Component {

  componentDidMount() {
    this.props.getBarberShop(this.props.match.params.id)
  }
  
  render() {
    console.log(this.props.barbershop, "props");
    const { barbershop:{address, name, imageUrl , services, phoneNumber, lat, lng}}=this.props.barbershop
    console.log(lat);
    
    
    
    const style = {
      width: '100%',
      height: '400px',
      backgroundImage: `url('${imageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid gold'
    }
 
    
    return (
      <div>
        <div className="container" style={{height: '1450px'}}>
        <div className="row">
             <div className="col" style={style}>
             </div>
          </div>
          <div className="row" style={{marginTop: '25px'}}>
            <section className="barbershop-name"> 
            <h1> {name}</h1>
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
                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iure quasi repellendus placeat atque voluptas, hic laboriosam sint nam officiis.</h6>
              </section>
            </div>
            <div className="row" style={{marginTop: '20px', marginLeft:'10px'}}>
                <h5> Services :</h5>
            </div>
              <div>
                {Array.isArray(services) && services.map(service=>{
                  return <li key={name}>{service}</li>
                  
                })}
             
           </div>
            
            <div className="row" style={{marginLeft: '35px', marginTop: '20px'}}>
            <button type="button" class="btn btn-warning" data-toggle="modal"
          data-target="#myModal">Book Now</button>
            <AppointmentModal
              
            />
            </div>
            <div className="row" style={{marginTop: '20px', marginLeft:'10px'}}>
              <h6>{address} - {phoneNumber}</h6>
            </div>
            <Iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0355930263654!2d${lng}22201307!3d${lat}9890469535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98abbfacdfba086a!2s${name}!5e0!3m2!1sid!2sid!4v1571028291842!5m2!1sid!2sid`} width="100%" height="500px" frameborder="0" allowfullscreen=""></Iframe>
          {/* <Iframe 
            width="100%" 
            height="500" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src={`https://maps.google.com/maps/embed?pb=${lat},${lng}+&hl=es;z=14&amp;output=embed`}
          >
          </Iframe> */}
        </div>
      </div>
    );
  
    }}  
const mapStateToProps = state => {
  return {
    barbershop: state.barbershop
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getBarberShop: (id) => dispatch(getBarberShop(id))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(barbershopDetail)