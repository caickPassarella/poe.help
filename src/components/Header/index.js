import React, { useContext } from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Context from '../../contexts';

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

const StyledDropdown = styled(Dropdown)`
  display: inline-block;
  min-width: 200px;
  padding: 0 20px;
  cursor: pointer;
`;

function MainHeader(props) {
  const { state: { leagues, selectedLeague, user }, handleStateChange, logout } = useContext(Context);

  const handleClick = function({key}) {
    handleStateChange({
      selectedLeague: leagues[key].id
    });
  };
  
  const leaguesMenu = (
    <Menu onClick={handleClick}>
      {leagues.map((league, i) => (
        <Menu.Item key={i}>
          {league.id}
        </Menu.Item>
      ))}
    </Menu>
  );
  
  const loginArr = [
    <Menu.Item>Dashboard</Menu.Item>,
    <Menu.Item onClick={logout}>Logout</Menu.Item>,
  ];

  const registerMenuArr = [
    <Menu.Item>
      <Link to="/login">Login</Link>
    </Menu.Item>,
    <Menu.Item>
      <Link to="/register">Register</Link>
    </Menu.Item>
  ];

  const renderMenuItems = function(menuArr) {
    return menuArr.map(menu => menu);
  }

  return (
    <StyledHeader>
      <StyledMenu theme="dark" mode="horizontal">
        <StyledDropdown overlay={leaguesMenu} trigger={["click"]}>
          <div>
            {selectedLeague} <Icon type="down" />
          </div>
        </StyledDropdown>
        {user ? renderMenuItems(loginArr) : renderMenuItems(registerMenuArr)}
      </StyledMenu>
    </StyledHeader>
  );
}

export default MainHeader;