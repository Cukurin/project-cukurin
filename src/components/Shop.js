import React from 'react'
import "./css/shop.css";
import axios from 'axios';

const API = process.env.REACT_APP_API_HOST

class Shop extends React.Component {
  handleClick = (event) => {
    // call the parent method selectShop
    event.preventDefault()
    this.props.selectShop(this.props.shop)
  }
  btnClick = (event) => {
    const {id} = this.props.barbershop._id
    event.preventDefault()
    axios.get(`${API}/barbershop/:${id}`).then((data) => {
      console.log(data)

    })
  }
  render() {
    const title = this.props.shop.name;
    const style = {
      backgroundImage: `url('${this.props.shop.imageUrl}')`
    };
    
    return(
      <div className="shop" onClick={this.handleClick}>
        <div className="shop-picture" style={style}></div>
        <div className="shop-title">
        <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span> 
        </div>
        {title} <button onClick={this.btnClick} type="button" class="btn btn-warning">Detail</button> 
      </div>
      
    );
  }
}
export default Shop;