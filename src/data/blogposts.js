import React from 'react'
import img from '../images/thinking.svg'
// importing blog 1 photos
import main from '../images/blog1/main.jpg'
import img1 from '../images/blog1/blog1-1.png'
import img2 from '../images/blog1/blog1-2.png'
import img3 from '../images/blog1/blog1-3.png'
import img4 from '../images/blog1/blog1-4.png'
import img5 from '../images/blog1/blog1-5.png'
import img6 from '../images/blog1/blog1-6.png'
import img7 from '../images/blog1/blog1-7.png'
import img8 from '../images/blog1/blog1-8.png'
import img9 from '../images/blog1/blog1-9.png'
import img10 from '../images/blog1/blog1-10.png'
import img11 from '../images/blog1/blog1-11.png'
import img12 from '../images/blog1/blog1-12.png'
import img13 from '../images/blog1/blog1-13.png'
import img14 from '../images/blog1/blog1-14.png'
import img15 from '../images/blog1/blog1-15.png'
import img16 from '../images/blog1/blog1-16.png'
import img17 from '../images/blog1/blog1-17.png'
import img18 from '../images/blog1/blog1-18.png'
import img19 from '../images/blog1/blog1-19.png'
import img20 from '../images/blog1/blog1-20.png'
import img21 from '../images/blog1/blog1-21.png'
import img22 from '../images/blog1/blog1-22.png'
import img23 from '../images/blog1/blog1-23.png'
import img24 from '../images/blog1/blog1-24.png'
import img25 from '../images/blog1/blog1-25.png'
import img26 from '../images/blog1/blog1-26.png'
import img27 from '../images/blog1/blog1-27.png'
import img28 from '../images/blog1/blog1-28.png'
import main2 from '../images/blog2/main.jpg'
import img29 from '../images/blog2/blgMain.png'

// importing blog 2 photos

const blogposts = [
  {
    id: 1,
    title: 'Hands-On: Building a CI/CD Pipeline Using Docker and Jenkins',
    description: 'In this blog post I would like to give a detailed information about how to create a CI/CD Pipeline using Docker and Jenkins. The intention of DevOps is to create better-quality software more quickly and with more reliability while inviting greater communication and collaboration between teams.',
    image: main,
    content: (
      <div>
        <h3>Step 1</h3>
        <p>Open your terminal in your VM. Start Jenkins and Docker using these commands: </p>
        <h4>systemctl start jenkins</h4>
        <h4>systemctl enable jenkins</h4>
        <h4>systemctl start docker</h4>
        <i>Note: Use sudo before the commands if it displays a &quot;privileges error.&quot;</i>
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <h3>Step 2</h3>
        <p>
          Open Jenkins on your specified port. Click on <strong>New Item </strong> to create a Job.{' '}
        </p>
        <div className="image">
          <img src={img2} alt="" />
        </div>
        <p>
          a <strong>freestyle</strong>  project and provide the item name (here I have given Job1) and click OK.{' '}
        </p>
        <div className="image">
          <img src={img3} alt="" />
        </div>
        <h3>Step 4</h3>
        <p>
          Select <strong>Source Code Management</strong> and provide the <strong>Git</strong> repository. Click on <strong>Apply</strong> and <strong>Save</strong> button.
        </p>
        <div className="image">
          <img src={img4} alt="" />
        </div>
        <h3>Step 5</h3>
        <p>Then click on Build Select Execute Shell.</p>
        <div className="image">
          <img src={img5} alt="" />
        </div>
        <h3>Step 6</h3>
        <p>Provide the shell commands. Here, it will build the archive file to get a war file. After that, it will get the code which is already pulled and then it uses maven to install the package. It simply installs the dependencies and compiles the application.</p>
        <div className="image">
          <img src={img6} alt="" />
        </div>
        <h3>Step 7</h3>
        <p>Create the new Job by clicking on New Item.</p>
        <div className="image">
          <img src={img7} alt="" />
        </div>
        <h3>Step 8</h3>
        <p>
          Select <strong>freestyle</strong> project and provide the item name (here I have given Job2) and click on OK.
        </p>
        <div className="image">
          <img src={img8} alt="" />
        </div>
        <h3>Step 9</h3>
        <p>Select Source Code Management and provide the Git repository. Click on Apply and Save button.</p>
        <div className="image">
          <img src={img9} alt="" />
        </div>
        <h3>Step 10</h3>
        <p>Then click on Build Select Execute Shell.</p>
        <div className="image">
          <img src={img10} alt="" />
        </div>
        <h3>Step 11</h3>
        <p> Provide the shell commands. Here it will start the integration phase and build the Docker Container.</p>
        <div className="image">
          <img src={img11} alt="" />
        </div>
        <h3>Step 12</h3>
        <p>Create the new Job by clicking on New Item.</p>
        <div className="image">
          <img src={img12} alt="" />
        </div>
        <h3>Step 13</h3>
        <p>Select freestyle project and provide the item name (here I have given Job3) and click on OK.</p>
        <div className="image">
          <img src={img13} alt="" />
        </div>
        <h3>Step 14</h3>
        <p>Select Source Code Management and provide the Git repository. Click on Apply and Save button.</p>
        <div className="image">
          <img src={img14} alt="" />
        </div>
        <h3>Step 15</h3>
        <p>Then click on Build Select Execute Shell. </p>
        <div className="image">
          <img src={img15} alt="" />
        </div>
        <h3>Step 16</h3>
        <p>Provide the shell commands. Here it will check for the Docker Container file and then deploy it on port number 8180. Click on Save button.</p>
        <div className="image">
          <img src={img16} alt="" />
        </div>
        <h3>Step 17</h3>
        <p>Now click on Job1 Configure.</p>
        <div className="image">
          <img src={img17} alt="" />
        </div>
        <h3>Step 18</h3>
        <p>Click on Post-build Actions Build other projects.</p>
        <div className="image">
          <img src={img18} alt="" />
        </div>
        <h3>Step 19</h3>
        <p>Provide the project name to build after Job1 (here is Job2) and then click on Save.</p>
        <div className="image">
          <img src={img19} alt="" />
        </div>
        <h3>Step 20</h3>
        <p>Now click on Job2 Configure.</p>
        <div className="image">
          <img src={img20} alt="" />
          <img src={img21} alt="" />
        </div>
        <h3>Step 21</h3>
        <p>Click on Post-build Actions Build other projects.</p>
        <div className="image">
          <img src={img22} alt="" />
        </div>
        <h3>Step 22</h3>
        <p>Provide the project name to build after Job2 (here is Job3) and then click on Save.</p>
        <div className="image">
          <img src={img23} alt="" />
        </div>
        <h3>Step 23</h3>
        <p>Now we will be creating a Pipeline view. Click on the "+" sign.</p>
        <div className="image">
          <img src={img24} alt="" />
        </div>
        <h3>Step 24</h3>
        <p>Select Build Pipeline View and provide the view name (here I have provided CI CD Pipeline).</p>
        <div className="image">
          <img src={img25} alt="" />
        </div>
        <h3>Step 25</h3>
        <p>Select the initialJob (here I have provided Job1) and click on OK.</p>
        <div className="image">
          <img src={img26} alt="" />
        </div>
        <h3>Step 26</h3>
        <p>Click on Run button to start the CI/CD process.</p>
        <div className="image">
          <img src={img27} alt="" />
        </div>
        <h3>Step 27</h3>
        <p>After successful build open localhost:8180/sample.text. It will run the application.</p>
        <div className="image">
          <img src={img28} alt="" />
        </div>
        <p>So far, we have learned how to create a CI/CD Pipeline using Docker and Jenkins. The intention of DevOps is to create better-quality software more quickly and with more reliability while inviting greater communication and collaboration between teams.</p>
        <div className="author">
          <p className="name"> Posted by Afgan Shahguliyev </p>
          <p className="name">on October 10, 2019</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Writing A Test Strategy Document',
    description:
      'Writing a Test Strategy effectively is a skill every tester should achieve in their career. Itinitiates your thought process which helps to discover many missing requirements. Thinking and test planning activities help a team to define the Testing scope and Test coverage. It helps Test managers to get the clear state of the project at any point. The chances of missing any test activity are very low when there is a proper test strategy in place.',
    image: main2,
    content: (
      <div>
        <h3>Learn To Write Test Strategy Document Efficiently</h3>
        <p>A strategy plan for defining the testing approach, what you want to accomplish and how you are going to achieve it.</p>
        <p>This document removes all uncertainty or vague requirement statements with a clear plan of approach for achieving the test</p>
        <h4>Writing A Test Strategy Document</h4>
        <h3>Test Strategy</h3>
        <p>Writing a Test Strategy effectively is a skill every tester should achieve in their career. It initiates your thought process which helps to discover many missing requirements. Thinking and test planning activities help a team to define the Testing scope and Test coverage.</p>
        <p>It helps Test managers to get the clear state of the project at any point. The chances of missing any test activity are very low when there is a proper test strategy in place.</p>
        <p>Test execution without any plan rarely works. I know teams who write strategy document but never refer it back while test execution. The Testing Strategy plan must be discussed with the whole team so that the team will be consistent with the approach and responsibilities.</p>
        <p>In tight deadlines, you can’t just waive any testing activity due to time pressure. At least it must go through a formal process before doing so.</p>
        <h3>What Is A Test Strategy?</h3>
        <p>Test strategy means “How you are going to test the application?” You need to mention the exact process/strategy that you are going to follow when you will get the application for testing.</p>
        <p>I see many companies follow the Test Strategy template very strictly. Even without any standard template, you can keep this Test Strategy document simple but still effective.</p>
        <h3>Test Strategy Vs. Test Plan</h3>
        <p>
          Over the years, I see a lot of confusion between these two documents. So let’s start with basic definitions. Generally, it doesn’t matter which comes first. The test planning document is a combination of strategy plugged with an overall project plan. According to IEEE Standard 829-2008, the Strategy plan is a
          sub-item of a test plan.
        </p>
        <p>
          Every organization has its own standards and processes to maintain these documents. Some organizations include strategy details in the test plan itself (here is a good example of this). Some organizations list strategy as a subsection in a testing plan but details are separated out in different test strategy
          documents.
        </p>
        <p>Project scope and test focus are defined in the test plan. Basically, it deals with test coverage, features to be tested, features not to be tested, estimation, scheduling and resource management.</p>
        <p>
          Whereas the test strategy defines guidelines for test approach to be followed in order to achieve the test objectives and execution of test types defined in the testing plan. It deals with test objectives, approach, test environment, automation strategy and tools, and risk analysis with a contingency plan.
        </p>
        <i>To summarize the Test Plan is a vision of what you want to achieve and the Test Strategy is an action plan designed to achieve this vision!</i>
        <p>
          I hope this will clear all your doubts. James Bach has more discussion on this topic <a href="https://www.satisfice.com/blog/archives/63"> here</a>.
        </p>
        <h3>Process To Develop A Good Test Strategy Document</h3>
        <p>Don’t just follow the templates without understanding what works best for your project. Every client has its own requirements and you must stick to the things that work perfectly for you. Do not copy any organization or any standard blindly. Always make sure if that is helping you and your processes.</p>
        <strong>Below is a sample strategy template that will outline what should be covered in this plan along with some examples to illustrate what makes sense to cover under each component.</strong> <br />
        <p></p>
        <strong>Test Strategy in STLC:</strong>
        <div className="image">
          <img src={img29} alt="" />
        </div>
        <strong>Common Sections Of Test Strategy Document</strong>
        <h3>Step #1: Scope And Overview</h3>
        <p>Project overview along with information on who should use this document. Also, include details like who will review and approve this document. Define testing activities and phases to be carried out with timelines with respect to overall project timelines defined in the test plan.</p>
        <h3>Step #2: Test Approach</h3>
        <p>Define the testing process, level of testing, roles, and responsibilities of every team member.</p>
        <p>
          For every test type defined in Test plan (For Example, Unit, Integration, System, Regression, Installation/Uninstallation, Usability, Load, Performance, and Security testing) describe why it should be conducted along with details like when to start, test owner, responsibilities, testing approach and details
          of automation strategy and tool if applicable.
        </p>
        <p>
          In test execution there are various activities like adding new defects, defect triage, defect assignments, re-testing, regression testing and finally test sign-off. You must define the exact steps to be followed for each activity. You can follow the same process which worked for you in your previous test
          cycles.
        </p>
        <p>A Visio presentation of all these activities including a number of testers and who will work on what activity is very helpful to quickly understand roles and responsibilities in the team.</p>
        <p>
          <strong>For Example, </strong>defect management cycle – mention the process to log the new defect. Where to log in, how to log new defects, what should be the defect status, who should do defect triage, whom to assign defects after triage etc.
        </p>
        <p>Also, define the change management process. This includes defining change request submission, template to be used, and process to handle the request.</p>
        <h3>Step #3: Test Environment</h3>
        <p>
          Test environment setup should outline information about a number of environments and required setup for each environment. <strong>For Example,</strong> One test environment for the functional test team and another for the UAT team.
        </p>
        <p>Define the number of users supported on each environment, access roles for each user, software and hardware requirements like operating system, memory, free disk space, number of systems, etc.</p>
        <p>Defining test data requirements is equally important. Provide clear instructions on how to create test data (either generate data or use production data by masking fields for privacy).</p>
        <p>Define test data backup and restore strategy. The test environment database may run into problems due to unhandled conditions in the code. I remember the problems we faced on one of the projects when there was no database backup strategy defined and we lost whole data due to code issues.</p>
        <p>Backup and restore process should define who will take backups when to take a backup, what to include in backup when to restore the database, who will restore it and data masking steps to be followed if the database is restored.</p>
        <h3>Step #4: Testing Tools</h3>
        <p>Define test management and automation tools required for test execution. For performance, load and security testing describe the test approach and tools required. Mention whether it is open source or commercial tool and how many users are supported on it and plan accordingly.</p>
        <h3>Step #5: Release Control</h3>
        <p>As mentioned in our last UAT article, unplanned release cycle could result in different software versions on test and UAT environments. Release management plan with proper version history will ensure test execution of all modifications in that release.</p>
        <p>
          <strong>For Example,</strong> Set build management process which will answer – where new build should make available, where it should be deployed, when to get the new build, from where to get the production build, who will give the go, the no-go signal for production release, etc.
        </p>
        <h3>Step #6: Risk Analysis</h3>
        <p>List all risks that you envision. Provide a clear plan to mitigate these risks and also a contingency plan in case if you see these risks in reality.</p>
        <h3>Step #7: Review And Approvals</h3>
        <p>When all these activities are defined in the test strategy plan it needs to be reviewed for sign-off by all entities involved in project management, business team, development team, and system administration (or environment management) team.</p>
        <p>Summary of review changes should be tracked at the beginning of the document along with approver name, date and comment. Also, it’s a living document meaning this should be continuously reviewed and updated with the testing process enhancements.</p>
        <p>
          <strong>Simple Tips To Write Test Strategy Document</strong>
        </p>
        <ol>
          <li>Include product background in the test strategy document. In the first paragraph of your test strategy document answer – Why stakeholders want to develop this project? This will help to understand and prioritize things quickly.</li>
          <li>List all important features you are going to test. If you think some features are not part of this release then mention those features under “Features not to be tested” label. </li>
          <li>
            Write down the test approach for your project. Clearly, mention what types of testing you are going to conduct? <br /> <span>i.e. Functional testing, UI testing, Integration testing, Load/Stress testing, Security testing, etc.</span>
          </li>
          <li>Answer questions like how you are going to perform functional testing? Manual or automation testing? Are you going to execute all test cases from your test management tool?</li>
          <li>Which bug tracking tool you are going to use? What will be the process when you will find a new bug?</li>
          <li>What are your test entry and exit criteria?</li>
          <li>How will you track your testing progress? What metrics are you going to use for tracking test completion?</li>
          <li>Task distribution – Define the roles and responsibilities of each team member.</li>
          <li>What documents will you produce during and after the testing phase?</li>
          <li>What risks do you see in Test completion?</li>
        </ol>
        <h3>Conclusion</h3>
        <p>Test Strategy is not a piece of paper. It’s the reflection of whole QA activities in the software testing life cycle. Refer this document time to time in the test execution process and follow the plan till the software release.</p>
        <p>
          When the project nears the release date it’s fairly easy to cut on testing activities by ignoring what you have defined in the test strategy document. But it is advisable to discuss with your team whether or not cutting down on any particular activity will help for release without any potential risk of major
          issues post-release.
        </p>
        <p>
          Most of the agile teams cut down on writing strategy documents as team focus is on test execution rather than documentation. But having a basic test strategy plan always helps to clearly plan and mitigate risks involved in the project. Agile teams can capture and document all high-level activities to complete
          test execution on time without any issues.
        </p>
        <i>I’m sure developing a good Test Strategy plan and committing to follow it will definitely improve the testing process and quality of the software. It would be my pleasure if this article inspires you to write a Test Strategy plan for your project!</i>
        <div className="author">
          <p className="name"> Posted by Afgan Shahguliyev </p>
          <p className="name">on November 10, 2020</p>
        </div>
      </div>
    ),
  },
]

export default blogposts
