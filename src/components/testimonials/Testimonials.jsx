import React from 'react';

import './testimonials.css';
import hobbies from '../../hobbies';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>What I Love to do</h5>
      <h2>My Hobbies</h2>

      <Swiper
        pagination={true} modules={[Pagination]}
        className='container testimonial__container'
      >
        {hobbies.map((hobby) => {
          return (
            <SwiperSlide key={hobby.id} className='testimonial'>
              <div className='testimonial__detail'>
                <img src={hobby.imageURL} className='testimonial-image' />
                <h3 className='testimonial__name'>{hobby.hobby}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;