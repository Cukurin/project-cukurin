import React, {Component} from 'react';
import Background from '../assets/bgtop.jpg';

let sectionStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
class Header extends Component {
  render() {
    return(
      
        <section style= {sectionStyle}>

        </section>
    )
  }
}
export default Header;