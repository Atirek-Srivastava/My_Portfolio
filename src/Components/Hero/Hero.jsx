import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Hero = () => {

  

  return (
    <> 
      <div id="home" className="hero">
        <img src={profile_img} alt="" className="profile-img" />
        <h1>
          <span>I'm Atirek Srivastava </span>, MERN Stack developer
        </h1>
        <p>A passionate and driven Web developer enthusiast looking to launch my career through meaningful internships and job opportunities. With a good knowledge in tech, I am eager to contribute to innovative projects and collaborate with dynamic teams.</p>
        
        <div className="hero-action">
          <div className="hero-connect">
          <a className="anchor-name" href="https://github.com/Atirek-Srivastava" target="_blank"  rel="noopener noreferrer">
          GitHub
      </a>
          </div>
          <div className="hero-connect">
          <a className="anchor-name" href="https://www.linkedin.com/in/atirek-srivastava-586151217/" target="_blank"  rel="noopener noreferrer">
          LinkedIn
      </a>
          </div>
          <div className="hero-resume">
          <a className="anchor-name" href='https://drive.google.com/file/d/1s8navFP9JBcSZaz6gcKVWB82XoA7Tipz/view?usp=sharing' target="_blank"  rel="noopener noreferrer">
          My Resume
      </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
