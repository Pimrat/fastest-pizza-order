import React from 'react'
import logo from '../../assets/images/logo.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../../assets/images/cart-icon-dark.png'
import SuccessMsg from '../../components/SuccessMsg'
import ResetLocation from '../../helpers/ResetLocation'
import './header.css'

const Header = ({ loginModal,
  productsQuantity,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin, activateLoginModal }) => {
  return (
    <header>
      {loginModal}
      <nav className="header__nav flex-container flex-row txt-center">
        <NavLink
          onClick={() => {
            ResetLocation()
            hideMenu()
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img
            width="100"
            height="100"
            className="logo"
            src={logo}
            alt="Pizza Time logo"
          />
          <h1>
            Fastest <span>Pizza</span>
          </h1>
        </NavLink>
        <ul className={`header__nav__menu flex-row pop-font ${isModalActive ? 'active' : ''}`}>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              หน้าหลัก
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/menu"
            >
              เมนู
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/blog"
            >
              บทความ
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/about"
            >
              About
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/contact"
            >
              Contact
            </NavLink>
          </li> */}
          {validLogin ? <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/profile"
            >
              Profile
            </NavLink>
          </li> : null}
          <li>
            <div className="login-and-cart">
              {validLogin ? (
                <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation()
                    handleLogout()
                  }}
                >
                  Log out
                </Link>
              ) : (
                <div
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation()
                    activateLoginModal()
                  }}
                >
                  เข้าสู่ระบบ
                </div>
              )}
              <NavLink
                className="cart-btn active-button-style txt-white"
                to="/cart"
                onClick={() => {
                  ResetLocation()
                  hideMenu()
                }}
              >
                <img src={Cart} alt="" aria-hidden="true" />
                <p>ตะกร้า</p>
                <p>({productsQuantity})</p>
              </NavLink>
            </div>
          </li>
        </ul>
        <img
          width="80"
          height="80"
          className="header__nav__hamburger"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
      <SuccessMsg />
    </header>
  )
}


export default Header;