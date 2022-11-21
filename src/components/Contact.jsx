import React from 'react';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="flex flex-col items-center p-8">
      <p className="text-heading-md font-serif mb-4">Contact</p>
      <p>Got a question? Let&#39;s get in touch!</p>
      <p>Shoot me an email or fill out the form below.</p>
      <div className="flex space-x-8 mt-8">
        <a href="mailto:alyssariah@gmail.com" className="contact-icon">
          <MdOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/alyssa-riah-jackson/"
          className="contact-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/alyssariah"
          target="_blank"
          className="contact-icon"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://codepen.io/alyssajackson"
          target="_blank"
          className="contact-icon"
          rel="noreferrer"
        >
          <FaCodepen />
        </a>
      </div>
    </div>
  );
}
