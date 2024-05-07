import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Education = () => {

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
        <div id='education' className="services">
            <div className="services-title"  ref={letterRef}>
                <h1>My Education</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index) =>{
                    return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc} </p>
                    
                    </div>
                })}
            </div>
        </div>
    </>
  )
}

export default Education