import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Main2 from '../../public/main2.png'

function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="hamburger-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="vvs head-2">VVS</div>
      </div>
      <div className='middle'>
        <img src={Main2} alt='main'></img>
      </div>
      <div className="right">
      <div className='loginss'>
      <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="user-name head-4">Nihar Ranjan</span>
      </div>
     
      </div>
    </div>
  );
}

export default Header;
