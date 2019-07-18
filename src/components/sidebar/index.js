import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

function Sidebar(props) {
  return (
    <div className="sidebarWrapper">
      <div className="logo">
        <img src="" alt="" />
      </div>
      {props.routes
        .filter(route => !route.hidden)
        .map(route => (
          <Link to={route.path}>{route.name}</Link>
      ))}
    </div>
  );
}

export default Sidebar;