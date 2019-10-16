import React, { Component } from 'react';
import './css/About.css'
import Image from '../assets/bgtop.jpg'
import Nico from '../assets/nico.jpg'
import Ian from '../assets/ian.jpg'
import Auzan from '../assets/auzan.jpg'
import Ido from '../assets/ido.jpg'

class About extends Component {
  render() {
    
    return (
      <div className="container">
        <br/>
        <div className="top-area">
              <div className="row">
          <div className="col">
            <div className="text">
            <h2> Who we Are</h2>
            <p>In modern times appearance is an important factor where one's personality will draw attention from how that person looks. Good appearance can also increase self-confidence, attract the attention of others and increase the confidence of others. Not only women who are used to preening, now men are already aware of the importance of appearance. This can be a new opportunity for business people to compete in providing goods or services that can meet the demand related to the purchase.
                Therefore, we took the initiative to run a business in the field of haircutting and shaving (barbershop) in order to obtain the opportunities that exist. That's related to haircut services that are easy to do and do not need to cost more than other businesses.</p>
            </div>
          </div>
          <div className="col">
            <div className="image-holder">
              <img src={Image} style={{height: '300px', marginTop: '100px'}} alt="kadal"/>

            </div>
            </div>
          </div>
        </div>
        <br/><br/>

        {/* pendaftaran barbershop baru */}


        {/* -- */}

        {/* carousel di isi pake foto bujang */}
        <h2 style={{textAlign:"center"}}>Team Cukurin</h2>
        <div className="row team">
        
        {/* card */}
        <div className="card" style={{width: "220px", height: '250px;'}}>
        <img src={Auzan} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Auzan</p>
          <small>Full Stack</small>
        </div>
      </div>
      <div className="card" style={{width: "220px", height: '250px;'}}>
        <img src={Ian} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Afriansyah</p>
          <small>Full Stack</small>
        </div>
      </div>
      <div className="card" style={{width: "220px", height: '250px;'}}>
        <img src={Nico} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Nico Husin</p>
          <small>Full Stack</small>

        </div>
      </div>
      <div className="card" style={{width: "220px", height: '250px;'}}>
        <img src={Ido} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Ridho</p>
          <small>Full Stack (Team Leader)</small>

        </div>
      </div>
       
      </div>
      <hr/>
      <br/><br/><br/>

      <div className="isiContainerFooter">
            <div className="containerTechnology">
              <ul>
                <div className='isiContainerTechnology'>
                  
                  <spans className='technology'>Technology that we use</spans>
                  <div className='isiContainerTechnology1'>
                    <li className="LogoHtml"></li>
                    <li className="LogoCSS"></li>
                    <li className="LogoJs"></li>
                    <li className="LogoReact"></li>
                    <li className="LogoRedux"></li>
                    <li className="LogoGoogleMaps"></li>
                  </div>
                  <div className='isiContainerTechnology2'>
                    <li className="LogoNodeJs"></li>
                    <li className="LogoMongoDB"></li>
                    <li className="LogoMongoose"></li>
                    <li className="LogoExpress"></li>
                  </div>
                  
                </div>
              </ul>
            </div>
            <div className="containerPatner"></div>
          </div>
      </div>
    );
  }
}

export default About;