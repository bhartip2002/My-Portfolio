import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

import './experience.css';
import frontend from '../../frontend';
import backend from '../../backend';

function createEntry(entry) {
  return (
    <article key={entry.id} className='experience__details'>
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
        <h4>{entry.framework}</h4>
        <small className='text-light'>{entry.level}</small>
      </div>
    </article>
  );
}

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontend.map(createEntry)}
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backend.map(createEntry)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;