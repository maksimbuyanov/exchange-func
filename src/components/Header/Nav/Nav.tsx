import React from "react"
import PropTypes from "prop-types"
import "./Nav.scss"
import { NavLink } from "react-router-dom"

function Nav(props) {
  const linkArray = [
    {
      title: "title1",
      route: "title1",
    },
    {
      route: "title2",
      title: "title2",
    },
    {
      title: "title3",
      route: "title3",
    },
  ]
  return (
    <nav className="nav header__nav">
      {linkArray.map(link => (
        <NavLink to={link.route} className="nav__link" key={link.route}>
          <span className="nav__title">{link.title}</span>
        </NavLink>
      ))}
    </nav>
  )
}

Nav.propTypes = {}

export default Nav
