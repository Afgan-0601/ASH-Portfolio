import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledUiTesting } from '../styles/StyledUiTesting'
import Illustration from '../images/thinking.svg'

const UiTesting = () => {
  const { setMenu, setHome, setPortfolio, setBlog, setContact, setAbout } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  useEffect(() => {
    setAbout(0)
    setHome(0)
    setPortfolio(1)
    setBlog(0)
    setContact(0)
  }, [])

  return (
    <StyledUiTesting menu={menu}>
      <Helmet>
        <title>Portfolio | API Testing </title>
        <meta name="description" content="My projects related to UI Testing" />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="title">
        <h1> UI Testing</h1>
      </div>
      <div className="card card1">
        <div className="image">
          <img src={Illustration} alt="" />
        </div>
        <div className="description"></div>
      </div>
      <div className="card card2">
        <div className="description"></div>
        <div className="image"></div>
      </div>
    </StyledUiTesting>
  )
}

export default UiTesting
