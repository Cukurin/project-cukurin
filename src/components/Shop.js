import React from 'react'
import "./css/shop.css";
import axios from 'axios';

const REACT_APP_API_HOST = process.env.REACT_APP_API_HOST

class Shop extends React.Component {
  handleClick = (event) => {
    // call the parent method selectShop
    event.preventDefault()
    this.props.selectShop(this.props.shop)
    console.log(this.props.shop._id, "aa");
    
  }
  btnClick = (event) => {
    const id = this.props.shops._id
    const url = axios.get(`${REACT_APP_API_HOST}/barbershop/:${id}`).then((data) => {
      console.log(data)
      event.preventDefault()
    })
    console.log(url + 'aaa')  ;    
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