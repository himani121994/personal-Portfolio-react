import React from 'react';
import { Card } from 'react-bootstrap';
import "../assets/css/features.css"; 
import { FaBars } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";

const Features = () => {
  return (
    <div className="features-container" style={{backgroundColor: "#343a40"}}>
      <p className='featureheading'>Features</p>
      <h4>What I Do</h4>
      <div className='row'>
        <div className='col-md-4'>
          <Card className="feature-card"> 
            <Card.Body>
              <FaBars className='icon'/>
              <Card.Title>HTML </Card.Title>
              <Card.Text>
              HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card className="feature-card"> 
            <Card.Body>
            <FaBookReader className='icon'/>
              <Card.Title>CSS</Card.Title>
              <Card.Text>
              CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.This tutorial will teach you CSS from basic to advanced.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className="feature-card"> 
            <Card.Body>
            <SiReactrouter className='icon'/>
              <Card.Title>React Js</Card.Title>
              <Card.Text>
              React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Second Row */}
      <div className='row'>
        <div className='col-md-4'>
          <Card className="feature-card"> 
            <Card.Body>
            <SiReactrouter className='icon'/>
              <Card.Title>Node Js</Card.Title>
              <Card.Text>
              Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card className="feature-card"> 
            <Card.Body>
            <SiReactrouter className='icon'/>
              <Card.Title>Mongo DB</Card.Title>
              <Card.Text>
              Build Your Next Project on MongoDB Atlas, the Cloud-Native Document Database as a Service. Create Deployments in Minutes w/ MongoDB Atlas.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className="feature-card"> 
            <Card.Body>
            <SiReactrouter className='icon'/>
              <Card.Title>Bootstrap</Card.Title>
              <Card.Text>
              Bootstrap is a powerful, extensible, and feature-packed frontend toolkit for building fast and responsive sites. Learn how to install, customize.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Features;
