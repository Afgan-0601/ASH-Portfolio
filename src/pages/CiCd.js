import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledCiCd } from '../styles/StyledCiCd'
import Illustration1 from '../images/uifirst.svg'

import Illustration3 from '../images/apitesting3.svg'

const CiCd = () => {
  const {
    setMenu,
    setHome,
    setPortfolio,
    setBlog,
    setContact,
    setAbout,
  } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  useEffect(() => {
    setAbout(0)
    setHome(0)
    setPortfolio(1)
    setBlog(0)
    setContact(0)
  }, [])

  return (
    <StyledCiCd menu={menu}>
      <Helmet>
        <title>Portfolio | CI/CD </title>
        <meta name="description" content="My projects related to CI/CD" />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="card card1">
        <div className="title">
          <h1>How to setup a CI/CD pipeline?</h1>
        </div>
        <div className="text">
          <p>
            A <span>CI/CD</span> Pipeline implementation, or Continuous
            Integration/Continuous Deployment, is the backbone of the modern
            DevOps environment. It bridges the gap between development and
            operations teams by automating the building, testing, and deployment
            of applications. In this blog, we will learn what a{' '}
            <span>CI/CD</span> pipeline is and how it works.
          </p>
          <p>
            Before moving onto the <span>CI/CD</span> pipeline, let&#39;s start
            by understanding DevOps.
          </p>
          <div className="image image1">
            <h1>Here Will be the graphic</h1>
          </div>
        </div>
      </div>

      <div className="card card2">
        <div className="text">
          <p>
            <span>DevOps </span> is a software development approach which
            involves continuous development, continuous testing, continuous
            integration, continuous deployment, and continuous monitoring of the
            software throughout its development lifecycle. This is the process
            adopted by all the top companies to develop high-quality software
            and shorter development lifecycles, resulting in greater customer
            satisfaction, something that every company wants.
          </p>
          <p>
            Your understanding of <span>DevOps </span> is incomplete without
            learning about its lifecycle. Let us now look at the{' '}
            <span>DevOps </span> lifecycle and explore how it is related to the
            software development stages.
          </p>
        </div>
        <div className="image image1">
          <h1>Here Will be the graphic</h1>
        </div>
      </div>
      <div className="card card3">
        <div className="text">
          <h3>
            What is the definition of <span>CI</span> and <span>CD</span> ?
          </h3>
          <p>
            <span>CI</span> stands for Continuous Integration and{' '}
            <span>CD</span> stands for Continuous Delivery/Continuous
            Deployment. You can think of it as a process similar to a software
            development lifecycle. Let us see how it works.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            The above pipeline is a logical demonstration of how software will
            move along the various stages in this lifecycle before it is
            delivered to the customer or before it is live in production.
          </p>
          <p>
            Let&#39;s take a scenario of a <span>CI/CD</span> Pipeline. Imagine
            you&#39;re going to build a web application which is going to be
            deployed on live web servers. You will have a set of developers
            responsible for writing the code, who will further go on and build
            the web application. Now, when this code is committed into a version
            control system (such as git, svn) by the team of developers. Next,
            it goes through the build phase, which is the first phase of the
            pipeline, where developers put in their code and then again the code
            goes to the version control system with a proper version tag.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            Suppose we have Java code and it needs to be compiled before
            execution. Through the version control phase, it again goes to the
            build phase, where it is compiled. You get all the features of that
            code from various branches of the repository, which merge them and
            finally use a compiler to compile it. This whole process is called
            the build phase.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            Once the build phase is over, then you move on to the testing phase.
            In this phase, we have various kinds of testing. One of them is
            the unit test (where you test the chunk/unit of software or for its
            sanity test).
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            When the test is completed, you move on to the deploy phase, where
            you deploy it into a staging or a test server. Here, you can view
            the code or you can view the app in a simulator.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            Once the code is deployed successfully, you can run another sanity
            test. If everything is accepted, then it can be deployed to
            production.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            Meanwhile, in every step, if there is an error, you can shoot an
            email back to the development team so that they can fix it. Then
            they will push it into the version control system and it goes back
            into the pipeline.
          </p>
          <p>
            Once again, if there is any error reported during testing, the
            feedback goes to the dev team again, where they fix it and the
            process reiterates if required.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            This lifecycle continues until we get code/a product which can be
            deployed to the production server where we measure and validate the
            code.
          </p>
          <p>
            We now understand the <span>CI/CD</span> Pipeline and its working;
            now, we will move on to understand what Jenkins is and how we can
            deploy the demonstrated code using Jenkins and automate the entire
            process.
          </p>
          <h3>The Ultimate CI Tool and Its Importance in the CI/CD Pipeline</h3>
          <p>
            Our task is to automate the entire process, from the time the
            development team gives us the code and commits it to the time we get
            it into production. We will automate the pipeline in order to make
            the entire software development lifecycle in DevOps/automated mode.
            For this, we will need automation tools.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            <span>Jenkins</span> provides us with various interfaces and tools
            in order to automate the entire process.
          </p>
          <p>
            We have a Git repository where the development team will commit the
            code. Then, <span>Jenkins</span> takes over from there, a front-end
            tool where you can define your entire job or the task. Our job is to
            ensure the continuous integration and delivery process for that
            particular tool or for the particular application.
          </p>
          <p>
            From Git, <span>Jenkins</span> pulls the code and then Jenkins moves
            it into the commit phase, where the code is committed from every
            branch. The build phase is where we compile the code. If it is Java
            code, we use tools like maven in <span>Jenkins</span> and then
            compile that code, which can be deployed to run a series of tests.
            These test cases are overseen by <span>Jenkins</span> again.
          </p>
          <p>
            Then, it moves on to the staging server to deploy it using{' '}
            <span>Docker</span> . After a series of unit tests or sanity tests,
            it moves on to production.
          </p>
        </div>
        <div className="image">
          <h1>Here will be the graphic.</h1>
        </div>
        <div className="text">
          <p>
            <span>Docker</span> is just like a virtual environment in which we
            can create a server. It takes a few seconds to create an entire
            server and deploy the artifacts we want to test. But here the
            question arises:
          </p>
          <p>
            Why do we use <span>Docker</span> ?
          </p>
          <p>
            As we said earlier, you can run the entire cluster in a few seconds.
            We have a storage registry for images where you build your image and
            store it forever. You can use it anytime in any environment which
            can replicate itself.
          </p>
        </div>
      </div>
    </StyledCiCd>
  )
}

export default CiCd
