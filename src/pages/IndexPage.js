import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import SocialMedia from '../components/SocialMedia'
import { StyledIndexPage } from '../styles/StyledIndexPage'
import Illustration from '../images/frontpage.svg'

const IndexPage = () => {
  const { setMenu, setHome, setPortfolio, setBlog, setContact, setAbout, toggleMenu } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  useEffect(() => {
    setHome(1)
    setPortfolio(0)
    setBlog(0)
    setContact(0)
    setAbout(0)
  }, [])

  return (
    <StyledIndexPage menu={menu}>
      <Helmet>
        <title>Portfolio | Homepage</title>
        <meta name="description" content="Afgan Shahguliyev's personal portfolio, where he shares his projects and CV." />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="left-column">
        <div className="hero">
          <h1 className="name">Afgan Shahguliyev</h1>
          <h4 className="profession"> API TESTING | UI TESTING | FRAMEWORKS | CI/CD</h4>
          <div className="buttons">
            <button className="portfolio" onClick={toggleMenu}>
              PORTFOLIO
            </button>
            <Link to="/contact">
              <button className="contact">CONTACT</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="right-column">
        <img src={Illustration} alt="" />
      </div>
    </StyledIndexPage>
  )
}

export default IndexPage