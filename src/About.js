import React from 'react';
import './index.css';
import Aman from '../src/images/Aman.jpg'

const About = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid jumbotron1">
  <div className="container">
  <h1 className="text-center">
  <img src={Aman} alt="" height="320px"></img>
  </h1>
  <h1>About Ak-Services</h1><hr/>
    <strong>
      We provide Best Courses Of every domain like : Web-Development, Machine Learning, Artificial Intelligence, Digital Marketing,
      Testing and Etc..In Ak-Services You will get all times of course and along with that You will get Personal Mentor support
       and Certification. 
    </strong>
  </div>
</div>
        </div>
    )
}

export default About;



