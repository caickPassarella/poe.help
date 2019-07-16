import React from 'react';
import './style.css'

function SidebarLogo(props) {
  return (
    <div className="logo">
    <img src={props.img} alt={props.alt}/>
  </div>
  )
}

function SidebarList(props) {
  list = ['Acts', 'End', 'Lab']
  return (
    list.map((item) =>
    <a href={props.href}>{item}</a>
  ))
}

function Sidebar(props) {
  return (
    <div className="sidebarWrapper">
        <SidebarLogo/>
        <SidebarList/>
    </div>
  )
}

export default Sidebar;