import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledApiTesting } from '../styles/StyledApiTesting'
import { Helmet } from 'react-helmet'
import Illustration1 from '../images/apitesting1.svg'
import Illustration2 from '../images/apitesting2.svg'
import Illustration3 from '../images/apitesting3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const ApiTesting = () => {
  const { setLoading, setHome, setPortfolio, setBlog, setContact, setAbout } = useContext(DispatchContext)
  const { menu, loading} = useContext(Context)

  useEffect(() => {
    setAbout(0)
    setHome(0)
    setPortfolio(1)
    setBlog(0)
    setContact(0)
  }, [])

  return (
    <StyledApiTesting menu={menu}>
      <Helmet>
        <title>Portfolio | API Testing </title>
        <meta name="description" content="My projects related to API Testing" />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="card card1">
        <div className="title">
          <h1>What is an API?</h1>
        </div>
        <div className="text">
          <p>In simple words, API stands for Application Programming Interface. API acts as an interface between two software applications and allows the two software applications to communicate with each other. API is a collection of software functions that can be executed by another software program. Protocols: A format for transmitting data between two systems.</p>
          <p>Let’s see some examples of an API in a more approachable way.</p>
          <div className="image image1">
            <h1>Here Will be the graphic</h1>
          </div>
        </div>
      </div>

      <div className="card card2">
        <div className="text">
          <h3>Assume an API as a Waiter at a Restaurant. </h3>
          <p>At a restaurant, you give an order based on the items available on the menu. A waiter in the restaurant writes down your order and delivers it to the kitchen who prepares your meal. Once the meal is ready, the waiter picks up your food from the kitchen and serves it to you at your table. In this scenario, the waiter’s role is similar to an API. As a waiter, the API takes a request from a source, takes that request to the database, fetches the requested data from the database, and returns a response to the source.</p>
          <p>Now let’s see another example.</p>
          <p>If you are using a flight service engine say Expedia, where you search for flights on a specific date. Once you pass the data such as Source, Destination, Onward Date, and Return Date and click on search. Expedia sends a request to airlines through an API as per your search details. The API then takes the airline’s response to your request and delivers it right back to Expedia.</p>
          <p>API gets the request from the user and gives the response without exposing internal logic. API acts like an Abstraction in the OOPs concept.</p>
          <p>UI (User Interface) testing is to test the graphical interface part of the application. Its main focus is to test the look and feel of an application. On the other hand, API testing enables the communication between two different software systems. Its main focus is on the business layer of the application.</p>
        </div>
      </div>
      <div className="card card3">
        <div className="text">
          <h3>Common tests on APIs:</h3>
          <p>Some of the common tests we perform on APIs are as follows.</p>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> To verify whether the return value is based on the input condition. The response of the APIs should be verified based on the request.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> To verify whether the system is authenticating the outcome when the API is updating any data structure.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> To verify whether the API triggers some other event or request another API.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> To verify the behavior of the API when there is no return value.
            </li>
          </ul>
        </div>
        <div className="image">
          <img src={Illustration2} />
        </div>
      </div>
      <div className="card card4">
        <div className="image">
          <img src={Illustration3} />
        </div>
        <div className="text">
          <h3>Advantages of API Testing:</h3>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API Testing is time effective when compared to GUI Testing. API test automation requires less code so it can provide faster and better test coverage.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API Testing helps us to reduce the testing cost. With API Testing we can find minor bugs before the GUI Testing. These minor bugs will become bigger during GUI Testing. So finding those bugs in the API Testing will be cost-effective to the Company.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API Testing is language independent.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API Testing is quite helpful in testing Core Functionality. We can test the APIs without a user interface. In GUI Testing, we need to wait until the application is available to test the core functionalities.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API Testing helps us to reduce the risks.
            </li>
          </ul>
        </div>
      </div>
      <div className="card card5">
        <div className="text">
          <h3>What exactly needs to be verified in API Testing?</h3>
          <p>Basically, on API Testing, we send a request to the API with the known data and we analyse the response.</p>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Data accuracy
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> HTTP status codes
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Response time
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Error codes in case API return any errors
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Authorization checks
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Non-functional testing such as performance testing, security testing
            </li>
          </ul>
          <h3>Tools used for API Testing :</h3>
          <p>Based on my experience I used of the tools for API Testing are as follows:</p>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Postman for Manual
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> SoapUI for Manual
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> RestAssured Library for Automation
            </li>
          </ul>
        </div>
      </div>
      <div className="card card7">
        <div className="image">
          <h1>Here will be a picture</h1>
        </div>
        <div className="text">
          <h1>API Testing</h1>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API testing is conducted by QA Team
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API testing is a form of Black box testing
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> API testing is conducted after the build is ready for testing
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Source code is not involved in API testing
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> In API testing, the scope of testing is wide, so all the issues that are functional are considered for testing
            </li>
          </ul>
          <h3>Challenges in API testing</h3>
          <p>Some of the challenges we face while doing API testing are as follows:</p>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Selecting proper parameters and its combinations
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Categorizing the parameters properly
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Proper call sequencing is required as this may lead to inadequate coverage in testing
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Verifying and validating the output
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Due to absence of GUI it is quite difficult to provide input values
            </li>
          </ul>
          <h3>Types of bugs we face when performing API testing</h3>
          <p>Issues observed when performing API testing are: </p>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Stress, performance, and security issues
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Duplicate or missing functionality
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Reliability issues
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Improper messaging
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Incompatible error handling mechanism
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Multi-threaded issues
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faCircle} /> Improper errors
            </li>
          </ul>
        </div>
      </div>
    </StyledApiTesting>
  )
}

export default ApiTesting
