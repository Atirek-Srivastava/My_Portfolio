import React from "react";
import "./Myproject.css";
// import { Link } from 'react-router-dom';
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Mywork = () => {
  const letterRef = useRef(null);

  useEffect(() => {
    const letter = letterRef.current;
    if (!letter) return;

    const bounce = () => {
      gsap
        .to(letter, { duration: 0.5, y: -20, ease: "power2.out" })
        .then(() =>
          gsap.to(letter, { duration: 0.5, y: 0, ease: "power2.inOut" })
        )
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
      <div id="work" className="mywork">
        <div className="mywork-title" ref={letterRef}>
          <h1>My Projects </h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="myproject-container">
          {mywork_data.map((work, index, link) => {
            return (
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                <img key={index} src={work.w_img} className="project-img" />
              </a>
            );

            // return <img key={index} src={work.w_img}  className='project-img'/>
          })}
        </div>
        <div className="mywork-showmore">
          <p>
            <a
              className="anchor-name"
              href="https://github.com/Atirek-Srivastava"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show More
            </a>
          </p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Mywork;
