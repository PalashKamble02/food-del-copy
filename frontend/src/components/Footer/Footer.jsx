import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Do you want to go to a restaurant? You can't spell menu without me and you.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us </li>
            <li>Delivery </li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH WITH ME 😉</h2>
            <ul>
                <li>+91-7057655378</li>
                <li>kamblepalash356@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Palash - All Right-Left-Up-Down Reserved. </p>
    </div>
  )
}

export default Footer
