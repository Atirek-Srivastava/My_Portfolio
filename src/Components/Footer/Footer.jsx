import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.avif'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                <AnchorLink href='#home'><img src={logo} alt="" className='logo-img' /></AnchorLink>
                    <p>Thank you for visiting!</p>
                </div>
                {/* <div className="footer-top-right"> */}
                    {/* <div className="footer-email-input"> */}
                        {/* <img src={user_icon} alt="" /> */}
                        {/* <input type="email" placeholder='Enter your email' /> */}
                    {/* </div> */}
                    {/* <div className="footer-subscribe">Subscribe</div>  */}
                {/* </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                Embrace the challenge, for every line of code is a step towards innovation and mastery.
                </p>
                <div className="footer-bottom-right"><div className="footer-bottom-right-instagram">
                    <a href='https://www.instagram.com/__atirek_/' target="_blank"> <img src={instagram} alt="" /></a>
                    </div>
                    <div className="footer-bottom-right-twitter"> 
                    <a href='https://twitter.com/__atirek_' target="_blank"> <img src={twitter} alt="" /></a>
                    </div>
                    <div className="footer-bottom-right-linkedin">
                    <a href='https://www.linkedin.com/in/atirek-srivastava-586151217/' target="_blank"> <img src={linkedin} alt="" /></a>
                    </div></div>
                
            </div>
        </div>
    </>
  )
}

export default Footer