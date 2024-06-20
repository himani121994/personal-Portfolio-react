import React, { useEffect } from 'react';
import $ from 'jquery';
import img from './assets/img/Himani.png';import './home.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    const words = ['designer. |', 'developer. |', 'professional.|'];
    let part = '';
    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 15;
    const speed = 70;

    const wordflick = () => {
      setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skip_count === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        $('.word').text(part);
      }, speed);
    };

    wordflick();
  }, []);

  return (
    <div className="portfolio-container">
      <div className="row no-gutters">
        <div className="col-sm-1"></div>
        <div className="col-sm-6 portfolio-header">
          <p>welcome to my Portfolio</p>
          <h1>Hi, I'm <span className="highlight">Himani Bhimte</span></h1>
          <div className="word-container">
            <h1 className="static-text">a </h1>
            <span className="word" style={{ marginLeft: '21px' }}></span>
          </div>
          <p className="description">
            I use animation as a third dimension by which to simplify experiences and
            <br /> guiding through each and every interaction. I’m not adding motion just to spruce
            <br /> things up, but doing it in ways that.
          </p>
          <div className='row' style={{ marginTop: "0px" }}>
            <div className='col-sm-5'>
              <p>FIND WITH ME</p>
              <div style={{ display: "flex" }}>
                <div className='social-meadia'><FaSquareFacebook style={{fontSize:"26px"}}/></div>
                <div className='social-meadia'><FaInstagramSquare style={{fontSize:"26px"}}/></div>
                <div className='social-meadia'><FaGithub style={{fontSize:"26px"}}/></div>
              </div>

            </div>
            <div className='col-sm-2'></div>
            <div className='col-sm-5'>
              <p>BEST SKILL ON</p>
              <div style={{ display: "flex" }}>
                <div className='social-meadia'><FaReact style={{fontSize:"26px"}}/></div>
                <div className='social-meadia'><FaHtml5 style={{fontSize:"26px"}}/></div>
                <div className='social-meadia'><FaCss3Alt style={{fontSize:"26px"}}/></div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-5 d-flex justify-content-center align-items-center position-relative">
          <div className="shadow-box"></div>
          <img src={img} alt="" className="image" />
        </div>
      </div>
      <div className='row'>

      </div>
    </div>
  );
};

export default Home;
