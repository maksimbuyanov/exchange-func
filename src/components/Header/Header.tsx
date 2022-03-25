import React from "react"
import PropTypes from "prop-types"
import Nav from "./Nav/Nav"

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo logo">LOGO</div>
        <Nav />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
