import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledAboutPage } from '../styles/StyledAboutPage'
import Illustration from '../images/aboutme.svg'
import SocialMedia from '../components/SocialMedia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/Loading'

const AboutPage = () => {
  const { setMenu, setHome, setPortfolio, setBlog, setContact, setAbout } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  useEffect(() => {
    setAbout(1)
    setHome(0)
    setPortfolio(0)
    setBlog(0)
    setContact(0)
  }, [])

  return (
    <StyledAboutPage menu={menu}>
      <Helmet>
        <title> Portfolio | About Me</title>
        <meta name="description" content="Here you can obtain a clear description about my professional experience and academic background." />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="container">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="card">
          <img src={Illustration} alt="" />

          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Professional software engineer with 6+ years of experience in Software Development and Software Quality Assurance in Testing.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Good at testing web Based applications. Experienced with core java, java frameworks, and OOP.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />I have working experience in various phases of Software Development Life Cycles (SDLC), Software Testing Life Cycles (STLC) and Bug Life Cycle and methods like Agile, SCRUM, and Waterfall Model.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Good at understanding and analyzing requirement specification and generating Test Plans, Test Cases and Requirement Traceability Matrix(RTM).
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Experienced in Manual Testing and Automation Testing. Proficient in Test Automation using tools like Selenium WebDriver, JUnit, TestNG for testing of web-based applications.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Good knowledge in the creation and development of Hybrid Framework by using Selenium WebDriver, Page Object Model (POM) with Maven.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Hands-on experience in defect tracking tools JIRA and ALM for logging and tracking the issues.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Experienced in testing REST API using Postman and REST Assured Library.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Proficient in working with XML and JSON. • Experienced in the testing database of applications developed with MySQL, PostgreSQL and Oracle DB with using JDBC Library.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Familiar with front end client-side Web/UI development in HTML and CSS.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Developed Test Scripts to implement Test Cases, Test Scenarios, and features for BDD(behavior-driven development), TDD(Test Driven Development) using Cucumber with Gherkin Language.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Expertise in Jenkins to build and deploy automated tests as part of Continuous Integration (CI) and Contonues Development (CD)
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Have experience working in Mac, Linux (Ubuntu) and Windows-based test and development environments.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Experienced in Integration Testing, Functional testing, System Testing, API Testing, GUI testing, Black Box Testing, Smoke testing, Regression Testing, Positive/Negative Testing, Cross Browser/ Platform Testing.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} />
              Experience with source version control tools such as SVN, GIT.
            </li>
          </ul>
        </div>
      </div>
    </StyledAboutPage>
  )
}

export default AboutPage
