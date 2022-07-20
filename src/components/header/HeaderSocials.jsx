import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/bharti-patel-3a9a85203/' target='blank'><BsLinkedin /></a>
        <a href='https://github.com/bhartip2002' target='blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;
