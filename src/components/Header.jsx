import { React } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function Header({ executeScroll, activeTab }) {
  // const [solidNavbar, setSolidNavbar] = useState(window.scrollY > 1);

  // const handleScroll = () => {
  //   window.scrollY > 1 ? setSolidNavbar(true) : setSolidNavbar(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const scrollExecute = (selection = '') => {
    executeScroll(selection);
  };
  return (
    <header
      className={clsx(
        'w-[100%] h-[50px] fixed top-0 hidden md:flex items-center bg-navigation justify-center font-serif z-[10] backdrop-blur-md backdrop-saturate-150'
      )}
    >
      <nav className="px-8 flex items-center justify-start space-x-12 w-[100%] text-white-normal">
        <span className="text-body-lg">Alyssa Jackson</span>
        <div className="text-body-md flex space-x-8">
          <div
            onClick={() => scrollExecute('about')}
            className={clsx('hover:cursor-pointer', {
              ['text-[#50BFC6]']: activeTab() == 'about',
              ['text-black-light']: activeTab() != 'about',
            })}
          >
            About
          </div>
          <div
            onClick={() => scrollExecute('portfolio')}
            className={clsx('hover:cursor-pointer', {
              ['text-[#50BFC6]']: activeTab() == 'portfolio',
              ['text-black-light']: activeTab() != 'portfolio',
            })}
          >
            Portfolio
          </div>
          <div
            onClick={() => scrollExecute('contact')}
            className={clsx('hover:cursor-pointer', {
              ['text-[#50BFC6]']: activeTab() == 'contact',
              ['text-black-light']: activeTab() != 'contact',
            })}
          >
            Contact
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  /**
   * Phone Case
   */
  executeScroll: PropTypes.func,
  /**
   * Phone Content
   */
  activeTab: PropTypes.func,
};
