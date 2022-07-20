import React from 'react';
import { FaAward } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';
import ME from '../../assets/bharti.jpg';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Had been Mentee at Microsoft through Microsoft Engage 2022.</small>
            </article>
            <article className='about__card'>
              <IoSchoolSharp className='about__icon' />
              <h5>Courses</h5>
              <small>Learned c++ and dsa.</small>
              <small>Learning machine learning and web development from Udemy.</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Completed 4+ projects.</small>
            </article>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing so
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  );
}

export default About;