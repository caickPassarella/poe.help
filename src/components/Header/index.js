import React from 'react';
import './style.css';

function Header(prop) {
  return (
   <div className="header">
    <div className="headerBtns">
        <select className="sellOption">
            <option value="">Help</option>
        </select>
        <select className="leagueOption">
            <option value="">Hardcore</option>
        </select>
    </div>
   </div>
  )
}

export default Header;