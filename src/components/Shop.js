import React, { Component } from "react";
import "./css/shop.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Shop extends Component {
  handleClick = event => {
    event.preventDefault();
    this.props.selectShop(this.props.shop);
  };
  handleMove = event => {
    event.preventDefault();
    const { _id } = this.props.shop;
    this.props.history.push(`/barbershop/${_id}`);
  };
  //create history - dengan withRouter

  render() {
    const title = this.props.shop.name;
    const style = {
      backgroundImage: `url('${this.props.shop.imageUrl}')`
    };

    return (
      <div className="shop" onClick={this.handleClick}>
        <div className="shop-picture" style={style}></div>
        <div className="shop-title">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        {title}{" "}
        <button onClick={this.handleMove} type="button" class="btn btn-warning">
          Detail
        </button>
      </div>
    );
  }
}

export default withRouter(connect()(Shop));
