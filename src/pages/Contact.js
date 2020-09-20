import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledContactPage } from '../styles/StyledContactPage'
import Illustration from '../images/contact.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'

const ContactPage = () => {
  const { setMenu, setHome, setPortfolio, setBlog, setContact, setAbout } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  useEffect(() => {
    setAbout(0)
    setHome(0)
    setPortfolio(0)
    setBlog(0)
    setContact(1)
  }, [])

  const formSubmit = x => {
    x.preventDefault()
  }

  return (
    <StyledContactPage menu={menu}>
      <Helmet>
        <title> Portfolio | Contact Me</title>
        <meta name="description" content="If you want to work with me, don't hesitate to contact me through this webpage." />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>

      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <div className="card">
        <div className="first-row">
          <div className="left-side">
            <img src={Illustration} alt="" />
          </div>
          <div className="right-side">
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faEnvelope} /> contact@afganshahguliyev.com
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faMobileAlt} /> +17033036066
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} /> 13954 Mansarde ave, Herndon, VA, 20171
              </li>
            </ul>
          </div>
        </div>
        <div className="second-row">
          <h1>Let's work and grow together.</h1>
          <form onSubmit={formSubmit}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea name="contact" id="" cols="30" rows="10" placeholder="Your Message" />
            <button>SEND</button>
          </form>
        </div>
      </div>
    </StyledContactPage>
  )
}

export default ContactPage
