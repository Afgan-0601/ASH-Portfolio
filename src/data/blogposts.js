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
        <p>Open your terminal in your VM. Start Jenkins and Docker using
            these commands: </p>
        <h4>systemctl start jenkins</h4>
        <h4>systemctl enable jenkins</h4>
        <h4>systemctl start docker</h4>
        <i>Note: Use sudo before the commands if it displays a &quot;privileges error.&quot;</i>
        <div className="image">
          <img src={img1} alt=""/>
        </div>
        <h3>Step 2</h3>
        <p>Open Jenkins on your specified port. Click on <strong>New Item </strong> to create a Job. </p>
        <div className="image">
        <img src={img2} alt=""/>
        </div>
        <p>a <strong>freestyle</strong>  project and provide the item name (here I have given Job1) and click OK. </p>
        <div className="image">
        <img src={img3} alt=""/>
        </div>
        <h3>Step 4</h3>
        <p>Select <strong>Source Code Management</strong> and provide the <strong>Git</strong> repository. Click on <strong>Apply</strong> and <strong>Save</strong> button.</p>
        <div className="image">
        <img src={img4} alt=""/>
        </div>
        <h3>Step 5</h3>
        <p>Then click on Build Select Execute Shell.</p>
        <div className="image">
        <img src={img5} alt=""/>
        </div>
        <h3>Step 6</h3>
        <p>Provide the shell commands. Here, it will build the archive file to get a war file. After that, it will get the code which is already pulled and then it uses maven to install the package. It simply installs the dependencies and compiles the application.
        </p>
        <div className="image">
        <img src={img6} alt=""/>
        </div>
        <h3>Step 7</h3>
        <p>Create the new Job by clicking on New Item.</p>
        <div className="image">
        <img src={img7} alt=""/>
        </div>
        <h3>Step 8</h3>
        <p>Select <strong>freestyle</strong> project and provide the item name (here I have given Job2) and click on OK.</p>
        <div className="image">
        <img src={img8} alt=""/>
        </div>
        <h3>Step 9</h3>
        <p>Select Source Code Management and provide the Git repository. Click on Apply and Save button.</p>
        <div className="image">
        <img src={img9} alt=""/>
        </div>
        <h3>Step 10</h3>
        <p>Then click on Build Select Execute Shell.</p>
        <div className="image">
        <img src={img10} alt=""/>
        </div>
        <h3>Step 11</h3>
        <p> Provide the shell commands. Here it will start the integration phase and build the Docker Container.</p>
        <div className="image">
        <img src={img11} alt=""/>
        </div>
        <h3>Step 12</h3>
        <p>Create the new Job by clicking on New Item.</p>
        <div className="image">
        <img src={img12} alt=""/>
        </div>
        <h3>Step 13</h3>
        <p>Select freestyle project and provide the item name (here I have given Job3) and click on OK.</p>
        <div className="image">
        <img src={img13} alt=""/>
        </div>
        <h3>Step 14</h3>
        <p>Select Source Code Management and provide the Git repository. Click on Apply and Save button.</p>
        <div className="image">
        <img src={img14} alt=""/>
        </div>
        <h3>Step 15</h3>
        <p>Then click on Build Select Execute Shell. </p>
        <div className="image">
        <img src={img15} alt=""/>
        </div>
        <h3>Step 16</h3>
        <p>Provide the shell commands. Here it will check for the Docker Container file and then deploy it on port number 8180. Click on Save button.</p>
        <div className="image">
        <img src={img16} alt=""/>
        </div>
        <h3>Step 17</h3>
        <p>Now click on Job1 Configure.</p>
        <div className="image">
        <img src={img17} alt=""/>
        </div>
        <h3>Step 18</h3>
        <p>Click on Post-build Actions Build other projects.</p>
        <div className="image">
        <img src={img18} alt=""/>
        </div>
        <h3>Step 19</h3>
        <p>Provide the project name to build after Job1 (here is Job2) and then click on Save.</p>
        <div className="image">
        <img src={img19} alt=""/>
        </div>
        <h3>Step 20</h3>
        <p>Now click on Job2 Configure.</p>
        <div className="image">
        <img src={img20} alt=""/>
        <img src={img21} alt=""/>
        </div>
        <h3>Step 21</h3>
        <p>Click on Post-build Actions Build other projects.</p>
        <div className="image">
        <img src={img22} alt=""/>
        </div>
        <h3>Step 22</h3>
        <p>Provide the project name to build after Job2 (here is Job3) and then click on Save.</p>
        <div className="image">
        <img src={img23} alt=""/>
        </div>
        <h3>Step 23</h3>
        <p>Now we will be creating a Pipeline view. Click on the "+" sign.</p>
        <div className="image">
        <img src={img24} alt=""/>
        </div>
        <h3>Step 24</h3>
        <p>Select Build Pipeline View and provide the view name (here I have provided CI CD Pipeline).</p>
        <div className="image">
        <img src={img25} alt=""/>
        </div>
        <h3>Step 25</h3>
        <p>Select the initialJob (here I have provided Job1) and click on OK.</p>
        <div className="image">
        <img src={img26} alt=""/>
        </div>
        <h3>Step 26</h3>
        <p>Click on Run button to start the CI/CD process.</p>
        <div className="image">
        <img src={img27} alt=""/>
        </div>
        <h3>Step 27</h3>
        <p>After successful build open localhost:8180/sample.text. It will run the application.</p>
        <div className="image">
        <img src={img28} alt=""/>
        </div>
        <p>So far, we have learned how to create a CI/CD Pipeline using Docker and Jenkins. The intention of DevOps is to create better-quality software more quickly and with more reliability while inviting greater communication and collaboration between teams.</p>
        <div className="author">
          <p className='name'> Posted by Afgan Shahguliyev </p>
          <p className='name'>on October 10, 2019</p>
        </div>
      </div>
    )
  }
]

export default blogposts
