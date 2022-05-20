import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class ApartmentIndex extends Component {
  render() {
    return (
      console.log(current_user)
      <div>
      <h3>Apartment Index</h3>
      {this.props.apartments && this.props.apartments.map(apartment => {
        return(
          <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id} > {apartment.street}</NavLink>


        )
        })}
      </div>
    )
  }
}

