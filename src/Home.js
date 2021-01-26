import React from 'react';
import './index.css';
import web from "../src/images/home-bg.jpg";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex  justify-content-center  flex-column">

                <h1>
                  Grow Your Business With <br/> <strong className="brand-name">Ak-Services</strong>
                </h1>

                <h2 className="my-3">
                We Provide You the best Technology through our best software Developer.
                </h2>

                <div className="mt-3">
                <NavLink to="/service" className="btn btn-outline-primary">
                 Get started
                </NavLink>
                </div>
                </div>


              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="home img"/>
              </div>
              </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Home;

