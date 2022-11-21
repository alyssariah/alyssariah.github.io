import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function BottomNavigation({ executeScroll, activeTab }) {
  return (
    <div className="fixed bottom-0 w-[100%] bg-navigation h-[55px] flex items-center justify-between md:hidden font-serif z-[10]">
      <div
        onClick={() => executeScroll('about')}
        className={clsx(
          'w-[301%] flex flex-col justify-center items-center space-y-1 h-[100%] p-2 hover:cursor-pointer',
          {
            ['text-[#50BFC6]']: activeTab() == 'about',
            ['text-black-light']: activeTab() != 'about',
          }
        )}
      >
        <BsPerson />
        <span className={clsx('text-body-sm')}>About</span>
      </div>
      <div
        onClick={() => executeScroll('portfolio')}
        className={clsx(
          'w-[301%] flex flex-col justify-center items-center space-y-1 h-[100%] p-2 hover:cursor-pointer',
          {
            ['text-[#50BFC6]']: activeTab() == 'portfolio',
            ['text-black-light']: activeTab() != 'portfolio',
          }
        )}
      >
        <AiOutlineProject />
        <span className={clsx('text-body-sm')}>Portfolio</span>
      </div>
      <div
        onClick={() => executeScroll('contact')}
        className={clsx(
          'w-[301%] flex flex-col justify-center items-center space-y-1 h-[100%] p-2 hover:cursor-pointer',
          {
            ['text-[#50BFC6]']: activeTab() == 'contact',
            ['text-black-light']: activeTab() != 'contact',
          }
        )}
      >
        <AiOutlineMail />
        <span className={clsx('text-body-sm')}>Contact</span>
      </div>
    </div>
  );
}

BottomNavigation.propTypes = {
  /**
   * Phone Case
   */
  executeScroll: PropTypes.func,
  /**
   * Phone Content
   */
  activeTab: PropTypes.func,
};
