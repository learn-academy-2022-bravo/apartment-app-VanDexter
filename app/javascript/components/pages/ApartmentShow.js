import React, { Component } from 'react'

export default class ApartmentShow extends Component {
  render() {
    console.log(this.props.apartment);
      return (
            <div>
              <h2>Apartment Show</h2>
              {this.props.apartment &&
                <div>
              <p> {this.props.apartment.street}</p>
              <p> {this.props.apartment.city}</p>
              <p> {this.props.apartment.manager}</p>
              <p> {this.props.apartment.email}</p>
              <p> {this.props.apartment.price}</p>
              <p> {this.props.apartment.bedrooms}</p>
              <p> {this.props.apartment.bathrooms}</p>
              <img src={this.props.apartment.image} width="200" height="200" />
              </div>}
            </div>
    )
  }
}

