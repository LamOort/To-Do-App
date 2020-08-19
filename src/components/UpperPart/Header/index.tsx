import * as React from 'react';
import Logo from '../../../assets/stepout-logo.svg';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="Stepout Logo" />
        <div className="Title">To-do List</div>
      </header>
    </div>
  );
};

export default Header;
