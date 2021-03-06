import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./css/search.css";
import Shop from "./Shop";
import Marker from "./marker";

// const API = process.env.REACT_APP_API_HOST;
// production
const SERVER = process.env.REACT_APP_API_SERVER;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      allshops: [],
      selectedShop: null,
      search: "",
      yesIWantToUseGoogleMapApiInternals: true
    };
  }

  componentDidMount() {
    const url = `${SERVER}/barbershop`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          shops: data,
          allshops: data
        });
      });
  }
  selectShop = shop => {
    this.setState({
      selectedShop: shop
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value,
      shops: this.state.allshops.filter(shop =>
        new RegExp(event.target.value, "i").exec(shop.name)
      )
    });
  };
  render() {
    let center = {
      lat: -6.2577096,
      lng: 106.8143932
    };
    if (this.state.selectedShop) {
      center = {
        lat: this.state.selectedShop.lat,
        lng: this.state.selectedShop.lng
      };
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="shops">
            {this.state.shops.map(shop => {
              return (
                <Shop
                  key={shop.name}
                  shop={shop}
                  selectShop={this.selectShop}
                  onClick={this.handleClick}
                />
              );
            })}
          </div>
        </div>
        <div className="map" style={{ width: "100%" }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            center={center}
            zoom={12}
          >
            {this.state.shops.map(shop => {
              return (
                <Marker
                  key={shop.name}
                  lat={shop.lat}
                  lng={shop.lng}
                  text={shop.name}
                  selected={shop === this.state.selectedShop}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
export default Search;
