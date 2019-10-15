import React from 'react'
import "./css/shop.css";


class Shop extends React.Component {
  handleClick = (event) => {
    // call the parent method selectShop
    event.preventDefault()
    this.props.selectShop(this.props.shop)
    console.log(this.props.shop._id);
    
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
        {title} <button onClick={this.handleClick} type="button" class="btn btn-warning">Detail</button> 
      </div>
      
    );
  }
}
export default Shop;