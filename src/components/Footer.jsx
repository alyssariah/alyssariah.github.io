import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ executeScroll }) {
  return (
    <footer className="flex flex-col lg:flex-row justify-between w-[100%] px-8 py-4 bg-black-normal text-white-normal font-serif pb-16 lg:pb-0">
      <span>&copy; 2022 Alyssa Jackson</span>
      <div className="flex flex-col lg:flex-row space-y-4 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-8 text-body-md">
        <div onClick={() => executeScroll('about')} className="hover:cursor-pointer">
          About
        </div>
        <div onClick={() => executeScroll('portfolio')} className="hover:cursor-pointer">
          Portfolio
        </div>
        <div onClick={() => executeScroll('contact')} className="hover:cursor-pointer">
          Contact
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  /**
   * Phone Case
   */
  executeScroll: PropTypes.func,
};
