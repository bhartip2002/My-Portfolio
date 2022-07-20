import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram, BsTwitter} from 'react-icons/bs';

import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <a href='#' className='footer__logo'>Bharti Patel</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Projects</a></li>
          <li><a href='#testimonials'>Hobbies</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://www.facebook.com/profile.php?id=100064034972690'><FaFacebookF/></a>
          <a href='https://www.instagram.com/bharti.__.patel/'><BsInstagram/></a>
          <a href='https://twitter.com/BhartiP39422417'><BsTwitter/></a>
        </div>

        <small className='footer__copyright'>Copyright © 2022</small>
      </footer>
    </div>
  )
}

export default Footer;