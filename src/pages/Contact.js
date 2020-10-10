import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledContactPage } from '../styles/StyledContactPage'
import Illustration from '../images/contact.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactPage = () => {

  const { setHome, setPortfolio, setBlog, setContact, setAbout, setLoading } = useContext(DispatchContext)
  const { menu } = useContext(Context)

  useEffect(() => {
    setAbout(0)
    setHome(0)
    setPortfolio(0)
    setBlog(0)
    setContact(1)
    setLoading(true)
  }, [])


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState()
  const [success, setSuccess] = useState(false)
  const [loadedImages, setLoadedImages] = useState(0)


  const countTimes = () => {
    setLoadedImages(loadedImages + 1)
  }

  useEffect(() => {
    if (loadedImages === 1) {
      setLoading(false)
    }
  }, [loadedImages])


  useEffect(() => {
    setError(false)
  }, [name, email, message])

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 2800)
  }, [success])

  const formSubmit = x => {
    x.preventDefault()
    if (name === '' || email === '' || message === '') {
      setError(true)
      setErrorText('Please, fill all the input fields. ')
    } else {
      // sendInfo()
      emailjs.sendForm('gmail', 'portfolio', x.target, 'user_h4Q1w3EOmf1x7pPQIXfud').then(
        result => {
          console.log(result.text)
          setSuccess(true)
          setName('')
          setEmail('')
          setMessage('')
        },
        error => {
          setError(true)
          setErrorText('Ups, something went wrong. Please, try again. ')
        }
      )
    }
  }

  return (
    <div style={{ visibility: loadedImages === 1 ? 'visible' : 'hidden' }}>
    <StyledContactPage menu={menu} error={error}>
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
            <img src={Illustration} alt="" onLoad={countTimes} />
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
       
         {!success && (
            <form onSubmit={formSubmit}>
            {error ? <p className="flash-msg"> {errorText}</p> : null}
              <input type="text" placeholder="Your Name" name="name" value={name} onChange={(input) => setName(input.target.value)} />
              <input type="email" placeholder="Your Email" name="email" value={email} onChange={(input) => setEmail(input.target.value)}/>
              <textarea name="contact" id="" cols="30" rows="10" placeholder="Your Message" name="message" value={message} onChange={(input) => setMessage(input.target.value)}/>
              <button >SEND</button>
            </form>
         )}

          {success && (
              <div className="success">
                Thank you for your message! <br /> I will get back to you as soon as possible.</div>
            )}
        </div>
      </div>
    </StyledContactPage>
    </div>
  )
}

export default ContactPage
