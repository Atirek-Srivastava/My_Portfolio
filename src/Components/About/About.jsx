import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from '../../assets/profile_img.png'
import about_profile from "../../assets/about_profile.jpg";
import { Widgets } from "@mui/icons-material";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function About() {

  const letterRef = useRef(null);

  
  useEffect(() => {
    const letter = letterRef.current;
    if (!letter) return;

    const bounce = () => {
      gsap.to(letter, { duration: 0.5, y: -20, ease: "power2.out" })
        .then(() => gsap.to(letter, { duration: 0.5, y: 0, ease: "power2.inOut" }))
        .then(bounce); // Recursive call for infinite loop
    };

    bounce(); // Start the initial bounce

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(letter); // Kill the animation to prevent memory leaks
    };
  }, [letterRef.current]);

  return (
    <>
      <div id="about" className="about">
        <div className="about-title"  ref={letterRef} >
          <h1 >About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={about_profile} alt="" className="about-profile-img" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                My name is Atirek Srivastava, and I am persuing Bachelor of
                Technology (B.Tech) degree in Electronics Engineering at Rajkiya
                engineering college Sonbhadra. Talking about web techonologies ,
                I have been honing my skills in frontend development,
                with React.js. I am also actively learning and
                applying Modern React with Redux,MREN i.e MongoDb,ReactJs,ExpressJs and NodeJs concepts to my projects.
                
              </p>
              <p>
              Apart from this, I am engaged in a meaningful initiative with an
                organization called Umeed. Through this organization, I
                contribute my time to teaching underprivileged students in rural
                areas free of cost.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>C</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>C++</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Node js</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Mongo DB</p> <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievments">
          <div className="about-achievment">
            <h1>over 10000+ Lines</h1>
            <p>C, C++, HTML, CSS, JavaScript</p>
          </div>
          <hr />
          <div className="about-achievment">
            <h1>over 5000+ Lines</h1>
            <p>React.js, Node.js</p>
          </div>
          <hr />
          <div className="about-achievment">
            <h1>Familier With</h1>
            <p>Tailwind, MongoDB, GIT, GITHUB</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
