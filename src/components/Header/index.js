import React, { useContext } from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import Context from '../../contexts';


function MainHeader(props) {
  const { Header } = Layout;
  const {state, handleStateChange} = useContext(Context);

  const handleClick = function({key}) {
    handleStateChange({
      selectedLeague: state.leagues[key]
    });
  };
  
  const leaguesMenu = (
    <Menu onClick={handleClick}>
      {state.leagues.map((league, i) => (
        <Menu.Item key={i}>
          {league}
        </Menu.Item>
      ))}
    </Menu>
  );
  
  return (
    <Header style={{ width: "100%", padding: '0 30px' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item>nav 1</Menu.Item>
        <Menu.Item>nav 2</Menu.Item>
        <Dropdown overlay={leaguesMenu} trigger={["click"]}>
          <a style={{padding: '0px 20px', float: "right"}} href="#">
            {state.selectedLeague} <Icon type="down" />
          </a>
        </Dropdown>
      </Menu>
    </Header>
  );
}

export default MainHeader;