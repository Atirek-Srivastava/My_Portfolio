import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                <AnchorLink href='#home'><img src={logo} alt="" className='logo-img' /></AnchorLink>
                    <p>Thank you for visiting!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        {/* <input type="email" placeholder='Enter your email' /> */}
                    </div>
                    {/* <div className="footer-subscribe">Subscribe</div>  */}
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                © Atirek Srivastava 2024. All Rights Reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privecy Policy</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer