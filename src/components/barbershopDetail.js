import React, { Component } from 'react';
import NavBar from './navbar'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class barbershopDetail extends Component {
  render() {
    return (
      <div>
        <NavBar />

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(barbershopDetail);
