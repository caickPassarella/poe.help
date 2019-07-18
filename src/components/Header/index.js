import React from 'react';
import './style.scss';

function Header(props) {
  return (
    <div className="header">
      <div className="headerBtns">
        <select className="sellOption">
          <option value="">Help</option>
        </select>
        <select className="leagueOption">
          {props.leagues.map(league => (
            <option value={league}>{league}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;