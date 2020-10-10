import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import SocialMedia from '../components/SocialMedia'
import { StyledIndexPage } from '../styles/StyledIndexPage'
import Illustration from '../images/frontpage.svg'

const IndexPage = () => {
  const { setLoading, setHome, setPortfolio, setBlog, setContact, setAbout, toggleMenu } = useContext(DispatchContext)
  const { menu, loading} = useContext(Context)

  useEffect(() => {
    setHome(1)
    setPortfolio(0)
    setBlog(0)
    setContact(0)
    setAbout(0)
    setLoading(true)
  }, [])

  const [loadedImages, setLoadedImages] = useState(0)


  const countTimes = () => {
    setLoadedImages(loadedImages + 1)
  }

  useEffect(() => {
    if (loadedImages === 1) {
      setLoading(false)
    }
  }, [loadedImages])

  return (
    <div style={{ visibility: loadedImages === 1 ? 'visible' : 'hidden' }}>
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
        <img src={Illustration} alt="" onLoad={countTimes}/>
      </div>
    </StyledIndexPage>
</div>
  )
}

export default IndexPage
