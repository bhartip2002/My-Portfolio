import React from "react";
import { BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c15h0y6",
        "template_dqsux3o",
        form.current,
        "btIEB7BItHAL7e0Zz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <a
              href="https://www.linkedin.com/in/bharti-patel-3a9a85203/"
              target="_blank"
            >
              Send a message.
            </a>
          </article>
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:bharti.dak.jnv2020@gmail.com" target="_blank">
              Send a message.
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/919302758485" target="_blank">
              Send a message.
            </a>
          </article>
        </div>

        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address."
            required
          />
          <textarea
            name="message"
            placeholder="Write Message"
            rows="5"
            required
          />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
