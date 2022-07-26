import React from "react";
import { FaAward } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
import ME from "../../assets/bharti.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                I worked as a Mentee at Microsoft through a mentorship program,
                Microsoft Engage 2022.
              </small>
            </article>
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />
              <h5>Courses</h5>
              <small>
                Learning Web Development from{" "}
                <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12288284#overview">
                  Udemy
                </a>
                . Learning machine learning from{" "}
                <a href="https://www.udemy.com/join/login-popup/?next=/course/complete-machine-learning-data-science-libraries-with-python/learn/v4/overview&utm_source=email-Pro&utm_campaign=_._cn_Program-Receipts_._us_AllAll_._tl_T1_._tg_n_._et_2_._eg_4_._la_en_._&utm_medium=Program-Receipts_SingleCourseReceipt_AllAll_T1_test_n&utm_content=udemy.15513525&data_h=&utm_term=SINGLE_COURSE_PURCHASE">
                  Udemy
                </a>
              </small>
              <small>
                . Learned c++ from{" "}
                <a href="https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL">
                  CodeWithHarry
                </a>
                , and dsa from{" "}
                <a href="https://youtu.be/B31LgI4Y4DQ">freeCodeCamp</a>.{" "}
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                My very recent projects include a Book Recommendation Engine,
                which recommends books to users based on their interests, a Blog
                website, and a to-do list. <a href="#portfolio">My Projects</a>
              </small>
            </article>
          </div>

          <p>Hello!</p>
          <p style={{ margin: 0 }}>
            I'm Bharti Patel, a prefinal year undergraduate at{" "}
            <a href="https://www.iitism.ac.in/iitismnew/">IIT (ISM) Dhanbad</a>.
            I'm a tech-enthusiast and a keen learner who loves to work in a
            team.
          </p>
          <p style={{ margin: 0 }}>
            I completed my intermediate education at{" "}
            <a href="https://www.dakshana.org/our_regions/jnv-bengaluru-urban/">
              Dakshana Foundation{" "}
            </a>
            and matriculated from{" "}
            <a href="https://www.navodaya.gov.in/nvs/nvs-school/RAIGARH/en/about_us/About-JNV/">
              JNV Raigarh
            </a>
            .
          </p>
          <p style={{ marginTop: 0 }}>
            In addition to coding, I love playing basketball, crafting, clicking
            photos, and much more.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
