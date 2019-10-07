import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './css/search.css';
import Shop from './Shop'
import Marker from './marker'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      allshops: [],
      selectedShop: null,
      search: ''
    };
  }
  //example fetch FAKE API
  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url) 
    .then(response => response.json())
    .then((data) => {
      this.setState({
        shops: data,
        allshops: data
    });
  })
  }
  selectShop = (shop) => {
    console.log(shop)
    this.setState({
      selectedShop: shop
    })
  }
  
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      shops: this.state.allshops.filter((shop) => new RegExp(event.target.value, 'i').exec(shop.name))
    })
  }
  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }
    if (this.state.selectedShop) {
      center = {
        lat: this.state.selectedShop.lat,
        lng: this.state.selectedShop.lng

      }
    }
    return(
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}/>
          </div>
          <div className="shops">
           {this.state.shops.map((shop) => {
             return <Shop 
             key={shop.name} 
             shop = {shop}
             selectShop={this.selectShop} />
           })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
              center={center}
              zoom={12}
              >
                {this.state.shops.map((shop) => {
             return <Marker 
             key={shop.name} 
             lat = {shop.lat} 
             lng={shop.lng} 
             text={shop.price}
             selected={shop === this.state.selectedShop} />
           })}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
export default Search;
