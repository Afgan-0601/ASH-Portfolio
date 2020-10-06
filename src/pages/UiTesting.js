import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledUiTesting } from '../styles/StyledUiTesting'
import Illustration1 from '../images/uifirst.svg'
import Illustration2 from '../images/apitesting2.svg'
import Illustration3 from '../images/apitesting3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const UiTesting = () => {
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
    <StyledUiTesting menu={menu}>
      <Helmet>
        <title>Portfolio | UI Testing </title>
        <meta name="description" content="My projects related to API Testing" />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="card card1">
        <div className="title">
          <h1>What is UI Testing and Web UI Testing?</h1>
        </div>
        <div className="text">
          <p>
            Today, businesses are mostly dependent on their website or mobile
            applications. These modes of business activities revolve around
            customer interactions, order processing, and transaction processing.
          </p>
          <div className="image image1">
            <h1>Here Will be the graphic</h1>
          </div>
        </div>
      </div>

      <div className="card card2">
        <div className="text">
          <p>
            Thus, these channels become an important revenue stream for
            businesses. In recent years, there has been migration from
            traditional desktop applications towards other forms of web-based
            apps and mobile applications.
          </p>
          <p>
            Today, businesses are in a need for automating web-based tests in
            their testing processes. This helps to gain an effective user
            interface (UI) and evidently delivers great user experience (UX) to
            end-users. This effectiveness can all be achieved by leveraging web
            automated testing.
          </p>
          <p>
            UI Testing is the process used to test the graphical user
            interface(UI) for any defects. Since automation is in demand
            globally, one of the important methods of UI testing is Web UI
            automation testing that is used to verify and validate the UI
            components of various web-based applications. Today’s end- user will
            appreciate websites, web-based apps or test automation mobile apps,
            only if they deliver great UX along with an effective UI that
            enables seamless performance.
          </p>
          <p>
            Basically, the web UI testing revolves around the graphical user
            interface (GUI) testing that includes testing of both the
            functionality and usability of the website or the web app. By
            specifically using web UI testing, it refers to testing GUI elements
            like fonts, layouts, buttons, checkboxes, images, colors, etc.
          </p>
          <p>
            Typically, this web UI testing process concentrates on how the
            look-and-feel of the website appears to end-users. When the web UI
            testing is done by using automated web UI testing tools then it is
            comprehensively named as automated web UI testing.
          </p>
        </div>
      </div>
      <div className="card card3">
        <div className="text">
          <h3>Why Should Businesses Leverage Automated UI Testing for Web?</h3>
          <p>
            Website UI testing is required to ensure the effective performance
            of the website and automated website testing is preferred today as
            this process ensures better test coverage and faster test
            execution. Automated UI testing for web using automation tools
            ensures that the web app meets the design and development
            specifications and ensures a user-friendly website to end-users.
          </p>
          <p>
            Hence, this sort of automated web application UI testing is
            performed to find defects either in the functionality or in the
            design of the website quickly. This web testing process is quite
            critical to achieve high-quality websites, but the testers face
            certain challenges while performing automated UI testing for Web.
          </p>
        </div>
        <div className="image">
          <img src={Illustration1} />
        </div>
      </div>
      <div className="card card4">
        <div className="text">
          <h1>Challenges with Web UI Automation Testing</h1>
          <p>
            Though automated web UI testing is very important, this process
            involves certain challenges that should be handled by the testers.
            Testers should carefully follow the UI testing checklist for the web
            application and follow the testing process as it includes certain
            challenges.
          </p>
          <div className="image">
            <img src={Illustration3} />
          </div>
        </div>
      </div>
      <div className="card card5">
        <div className="text">
          <h3>1. Multiple error handling:</h3>
          <p>
            Error handling is a tedious process with web UI automated testing.
            Especially when there are large projects with complex scenarios then
            typically error handling becomes tough.
          </p>
          <h3>
            2. Handling of frequent changes in UI and maintaining UI test
            scripts:
          </h3>
          <p>
            It is a known fact that web applications’ UI is prone to changes in
            terms of logic, adding new features, new integrations, or due to new
            functionalities during the development process Thus, the UI is more
            prone to changes and the UI testing scripts maintenance becomes a
            challenge.
          </p>
          <h3>3. Image comparison:</h3>
          <p>
            Handling of image comparisons is an important aspect of automated UI
            testing. It is a crucial factor as pixel variations in size, color,
            shape, and formats should be handled effectively while testing
            website UI.
          </p>
          <h3>4. Testing UI elements:</h3>
          <p>
            Web UI automation testers often face a lot of hardships while
            testing UI elements.
          </p>
          <h3>5. Longer test script execution time:</h3>
          <p>
            Typically, web UI automation requires more execution time depending
            on the number of test cases, and often it takes more time for
            execution.
          </p>
          <h3>6. Increasing testing complexity:</h3>
          <p>
            As today’s modern applications have complex features such as
            embedded frames, maps, flowcharts, diagrams and more. These make the
            UI tests to become more difficult and challenging while testing
            them.
          </p>
          <h3>7. ROI of UI Automation:</h3>
          <p>
            It is a fact that application UI keeps changing and simultaneously
            the test scripts should also be changed. This primarily increases
            the time spent on Web UI testing and it becomes difficult to
            calculate the ROI while continuously performing these UI tests.
          </p>
        </div>
      </div>
      <div className="card card7">
        <div className="text">
          <h1>How to Overcome Web UI Automation Challenges?</h1>
        </div>
        <div className="image">
          <h1>Here will be a picture</h1>
        </div>
        <div className="text">
          <h3>1. Choose right UI test automation tool:</h3>
          <p>
            It is essential to choose the right framework for web UI automation.
            Choose a right automation tool that easily integrates into your
            workflow. Moreover, selecting an effective web UI automation tool
            helps to record and playback the modules. It also helps the testers
            and QA teams to generate reports with screenshots to identify error
            sequences quickly.
          </p>
          <h3>2. Prefer to choose codeless automation testing tools:</h3>
          <p>
            It is necessary to prefer codeless web UI automation tools as these
            codeless UI automation tools eases the process of script
            maintenance, and testers can save both time and cost.
          </p>
          <h3>3. Choose Common UI Elements to ease UI testing process:</h3>
          <p>
            It is preferred that developers should use common UI elements such
            that it becomes easy for testers to understand them quickly without
            any difficulty.
          </p>
          <h3>4. Leverage an object repository:</h3>
          <p>
            It is preferred to choose a shared repository to reduce test
            maintenance and reduce the associated costs. In order to ensure
            effective UI test cases success, it is better to reduce the UI test
            cases in the initial testing stages and then slowly increase them as
            testing moves forward.
          </p>
          <h3>
            5. Maintain standard organizational-level best test automation
            practices:
          </h3>
          <p>
            It is necessary to maintain and follow the best code review
            processes across the enterprise to ensure best test automation
            practices are adopted. Automated UI testing for Web is enabled by
            using various web UI automation testing tools which deliver numerous
            benefits while testing web applications.
          </p>
        </div>
      </div>
      <div className="card card7">
        <div className="text">
          <h1>
            What is the Importance of tools in Automated UI Testing for web?
          </h1>
        </div>
        <div className="image">
          <h1>Here will be a picture</h1>
        </div>
        <div className="text">
          <h3>1. Eases image comparison process:</h3>
          <p>
            For today’s modern applications, image comparison is vital and
            usually these images on a web application are either with a URL or
            with other images. Therefore, web UI automation tools can be used to
            support and ease image comparison.
          </p>
          <h3>2. Effective for functional testing:</h3>
          <p>
            End-users like web apps that have a simple and easy to use
            navigation which is possible with good functionality. Automated UI
            testing tools can be used to get information with respect to the
            functionality of web apps.
          </p>
          <h3>3. Supports cross-browser/platform testing:</h3>
          <p>
            These automated web UI tools support testing on multiple browsers,
            multiple platforms and also on various latest devices. The web apps
            are tested for their performance across browsers and platforms to
            know their compatibility.
          </p>
          <h3>4. Easily Integrates with bug-tracking tools:</h3>
          <p>
            UI test automation tools support integration with bug tracking tools
            such as Bugzilla, JIRA, Mantis, Quality Center, etc. Evidently, this
            integration helps to log defects into any of the bug tracking tools
            and thus it becomes easy to track them.
          </p>
          <h3>5. Uniquely used for captcha automation:</h3>
          <p>
            It is an effective security measure across websites to enter captcha
            so as to block robots and ensure human angle in the website visitor.
            UI testing tools support captcha automation and introducing web UI
            tools with captcha codes becomes essential for businesses.
          </p>
          <h3>6. Helps to quickly generate reports:</h3>
          <p>
            These web UI application testing tools can be used to quickly get
            visual reports along with detailed logs. These reports become handy
            and can be shared across development and testing teams.
          </p>
        </div>
      </div>
      <div className="card card8">
        <div className="text">
          <h1>Some of the leading Web UI Automation Testing Tools</h1>
        </div>
        <div className="image">
          <h1>Here will be an image</h1>
        </div>
        <div className="text">
          <h3>1. Selenium:</h3>
          <p>
            This is one of the most commonly used open-source test automation
            tool that is used to automated browsers. Selenium Testing supports
            multiple programming languages such as Java, C#, Python, etc. to
            create selenium test scripts. Selenium tool is best suited and used
            for all web applications across browsers.
          </p>
          <h3>2. ACCELQ:</h3>
          <p>
            ACCELQ is a leading codeless test automation and agile test
            management platform which is AI based and is a continuous testing
            platform. This tool is used for quality lifecycle management, API
            and UI end-to-end validations. It is an effective functional and
            test automation platform and is next-gen test management platform
            for manual and automation intelligent test planning and delivers
            change management.
          </p>
          <h3>3. Tricentis Tosca:</h3>
          <p>
            Tricentis Tosca is an effective automation tool that supports all
            testing activities ranging from test design, test automation to test
            reports along with analytics. It has special features such as
            dashboards, analytics, integrations, and effective test executions
            to support CI and DevOps practices.
          </p>
          <p>
            This tool also offers a user-friendly UI and a rich feature set for
            designing, executing, implementing and optimizing API tests.
            These API tests can be used to test across all browsers, mobile
            devices, and various platforms.
          </p>
          <h3>4. QTP/UFT:</h3>
          <p>
            Unified Functional Testing (UFT) is an automation tool that provides
            functional and regression test automation for software applications
            and environments. UFT tool automates functional testing for web,
            mobile, API, RPA and enterprise applications by increasing the test
            coverage from the UI to API.
          </p>
          <h3>5. TestComplete:</h3>
          <p>
            TestComplete is one of the important automation testing tool that is
            used to test desktop, web and mobile applications. It is
            specifically used to build, test and run functional user interface
            tests with its much useful record and playback features. This tool
            supports all scripting languages such as JavaScript, Python,
            VBScript to name a few.
          </p>
          <h3>6. Katalon:</h3>
          <p>
            Katalon studio is the most widely used open-source test automation
            tool that can be used to test both web and mobile applications. This
            tool can be used together with Appium and Selenium. It primarily
            helps to quickly generate automated tests cross-platform and
            seamlessly integrates into CI/CD pipeline. Some of its features
            include an integrated development environment, a base level object
            repository, object spy and a typical browser plugin, etc.
          </p>
        </div>
      </div>
      <div className="card card9">
        <div className="text">
          <h1>Conclusion</h1>
          <p>
            Automated UI Testing for Web is a critical testing process which
            businesses should leverage to know about the functionality of
            various web app GUI features and how they function. Additionally,
            this web UI automation testing reduces regression testing efforts
            largely. But, there are certain challenges with respect to web UI
            automation testing that should be effectively handled by testers. By
            handling these challenges, it helps to evolve an effective user
            friendly website and web app that delivers great UI and UX to
            end-users.
          </p>
          <p>
            Hence, automated Web UI testing should be leveraged to deliver an
            effective web application that delivers great satisfaction to
            end-users. Leverage next-gen testing services provider to ensure a
            quality web app to your users with thorough web UI automated
            testing.
          </p>
        </div>
      </div>
      <div className="card card10">
        <div className="text">
          <h1>Related Queries on UI Testing</h1>
        </div>
        <div className="image">
          <h1>Here will be an image</h1>
        </div>
        <div className="text">
          <h3>1. What is UI testing?</h3>
          <p>
            UI Testing is the process used to test the graphical user
            interface(UI) for any defects.
          </p>
          <h3>2. What is automated UI testing? </h3>
          <p>
            Since automation is in demand globally, one of the important methods
            of UI testing is Web UI automation testing that is used to verify
            and validate the UI components of various web-based applications.
          </p>
          <h3>3. Why UI testing is important?</h3>
          <p>
            Website UI testing is required to ensure the effective performance
            of the website and automated website testing is preferred today as
            this process ensures better test coverage and faster test execution.
          </p>
          <h3>4. How do you automate Web UI testing?</h3>
          <p>
            We can automate UI testing by using best UI testing tools. These
            tools have great usability features and have put the UX at the
            forefront.
          </p>
        </div>
      </div>
    </StyledUiTesting>
  )
}

export default UiTesting
