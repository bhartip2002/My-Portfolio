import React from 'react';
import { FiCheck } from 'react-icons/fi';

import './services.css';
import services from '../../services';

function createList(item) {
  return (
    <li key={item.id}>
      <FiCheck className='service__list-icon' />
      <p>{item.para}</p>
    </li>
  );
}

function createEntry(entry) {
  return (
    <article key={entry.id} className='service'>
      <div className='service__head'>
        <h3>{entry.title}</h3>
      </div>
      <ul className='service__list'>
        {entry.content.map(createList)}
      </ul>
    </article>
  );
}

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {services.map(createEntry)}
      </div>
    </section>
  );
}

export default Services;