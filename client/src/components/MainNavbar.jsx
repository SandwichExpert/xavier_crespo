import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'glamor'

const style = {
  MenuLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    ':hover': { color: '#FFFFFF', fontWeight: 'bold' },
  },
}

export default function MainNavBar() {
  const [isSelected, setIsSelected] = useState(null)
  const [isClicked, setIsClicked] = useState(false)

  function handleClick(e) {
    const name = e.target.name

    setIsSelected(name)
  }

  function scrollDown(e) {
    e.preventDefault()
    if (isClicked) {
      setIsClicked(false)
    } else setIsClicked(true)
  }

  return (
    <>
      <div className="mobile__div">
        <div className="mobile__top">
          <NavLink
            exact={true}
            to="/"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
          >
            Xavier
          </NavLink>
          <i className="fas fa-bars" onClick={scrollDown}></i>
        </div>
        {isClicked && (
          <div className="mobile__bot">
            <NavLink
            name="home"
            exact={true}
            to="/"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
            onClick={handleClick}
          >
            {isSelected === 'home' ? (
              <i className="fas fa-home" style={{ fontSize: '1.5em' }}></i>
            ) : (
              'Home'
            )}
          </NavLink>
            <NavLink
              to="/about"
              className="navLink"
              {...css(style.MenuLink)}
              activeClassName="is-active"
              name="about"
              onClick={handleClick}
            >
              {isSelected === 'about' ? (
                <i className="fas fa-user" style={{ fontSize: '1.5em' }}></i>
              ) : (
                'About'
              )}
            </NavLink>
            <NavLink
              to="/work"
              className="navLink"
              {...css(style.MenuLink)}
              activeClassName="is-active"
              name="projects"
              onClick={handleClick}
            >
              {isSelected === 'projects' ? (
                <i
                  className="fas fa-briefcase"
                  style={{ fontSize: '1.5em' }}
                ></i>
              ) : (
                'Projects'
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className="navLink"
              {...css(style.MenuLink)}
              activeClassName="is-active"
              name="contact"
              onClick={handleClick}
            >
              {isSelected === 'contact' ? (
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: '1.5em' }}
                ></i>
              ) : (
                'Contact'
              )}
            </NavLink>
          </div>
        )}
      </div>

      <div className="nav__container">
        <div className="nav__top">
          <NavLink
            exact={true}
            to="/"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
          >
            Xavier
          </NavLink>
        </div>
        <div className="nav__middle">
          <NavLink
            name="home"
            exact={true}
            to="/"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
            onClick={handleClick}
          >
            {isSelected === 'home' ? (
              <i className="fas fa-home" style={{ fontSize: '1.5em' }}></i>
            ) : (
              'Home'
            )}
          </NavLink>

          <NavLink
            to="/about"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
            name="about"
            onClick={handleClick}
          >
            {isSelected === 'about' ? (
              <i className="fas fa-user" style={{ fontSize: '1.5em' }}></i>
            ) : (
              'About'
            )}
          </NavLink>
          <NavLink
            to="/work"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
            name="projects"
            onClick={handleClick}
          >
            {isSelected === 'projects' ? (
              <i className="fas fa-briefcase" style={{ fontSize: '1.5em' }}></i>
            ) : (
              'Projects'
            )}
          </NavLink>
          <NavLink
            to="/contact"
            className="navLink"
            {...css(style.MenuLink)}
            activeClassName="is-active"
            name="contact"
            onClick={handleClick}
          >
            {isSelected === 'contact' ? (
              <i className="fas fa-envelope" style={{ fontSize: '1.5em' }}></i>
            ) : (
              'Contact'
            )}
          </NavLink>
        </div>
        <div className="nav__bottom">
          <a
            href="https://github.com/SandwichExpert"
            style={{ fontSize: '1.5em' }}
            className="navLink"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/xaviercrespodev" className="navLink">
            <i className="fab fa-linkedin" style={{ fontSize: '1.5em' }}></i>
          </a>
        </div>
      </div>
    </>
  )
}
