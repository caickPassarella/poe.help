import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Context from '../../contexts';
import Dropdown from '../Dropdown';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 0 30px;
`;

const StyledMenu = styled(Menu)`
  line-height: 64px;
  min-width: 200px;
  
  .ant-menu-item {
    float: right;
  }
`;

function MainHeader(props) {
  const { state: { leagues, selectedLeague, user }, handleStateChange, logout } = useContext(Context);

  const handleClick = function({key}) {
    handleStateChange({
      selectedLeague: leagues[key].id
    });
  };
  
  const loginArr = [
    <Menu.Item key={0}>Dashboard</Menu.Item>,
    <Menu.Item key={1} onClick={logout}>Logout</Menu.Item>,
  ];

  const registerMenuArr = [
    <Menu.Item key={0}>
      <Link to="/login">Login</Link>
    </Menu.Item>,
    <Menu.Item key={1}>
      <Link to="/register">Register</Link>
    </Menu.Item>
  ];

  const renderMenuItems = function(menuArr) {
    return menuArr.map(menu => menu);
  }

  return (
    <StyledHeader>
      <StyledMenu theme="dark" mode="horizontal">
        <Dropdown data={leagues} selected={selectedLeague} handleClick={handleClick} />
        {user ? renderMenuItems(loginArr) : renderMenuItems(registerMenuArr)}
      </StyledMenu>
    </StyledHeader>
  );
}

export default MainHeader;