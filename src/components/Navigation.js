import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledNavigation } from '../styles/StyledNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const { setMenu, setHome, setPortfolio, setBlog, setContact, setAbout, toggleMenu } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  return (
    <StyledNavigation home={home} about={about} menu={menu} contact={contact} blog={blog}>
      <ul>
        {!home ? (
          <Link to="/" onClick={() => setMenu(0)}>
            <li className="home">HOME</li>
          </Link>
        ) : null}
        <li className="portfolio" onClick={toggleMenu}>
          PORTFOLIO
        </li>
        <Link to="/blog">
          <li className="blog">BLOG</li>
        </Link>
        <Link to="/about" onClick={() => setMenu(0)}>
          <li className="about">ABOUT</li>
        </Link>
        <Link to="/contact" onClick={() => setMenu(0)}>
          <li className="contact">CONTACT</li>
        </Link>
      </ul>
      <Link to="/">
        <FontAwesomeIcon className="homeIcon" icon={faHome} onClick={() => setMenu(0)} />
      </Link>
      <FontAwesomeIcon className="burgerMenu" icon={faBars} onClick={toggleMenu} />
    </StyledNavigation>
  )
}

export default Navigation
