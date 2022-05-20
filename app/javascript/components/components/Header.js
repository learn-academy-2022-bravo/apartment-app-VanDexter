import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Helmet } from "react-helmet"

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user.id)
    return (
      <>
        <h1>Apartment App</h1>
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>

        <div>
          <Helmet>
            <style>{'body { background-color:#2cd5eb; }'}</style>
          </Helmet>

        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/apartmentindex">See All Apartments <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/apartmentnew">Upload an Apartment Listing</a>
              </li>
            </ul>
          </div>
        </nav>

      </>

    )
  }
}
export default Header