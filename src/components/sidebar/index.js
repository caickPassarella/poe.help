import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

const { Sider } = Layout;

function Sidebar(props) {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Logo />
      <Menu theme="dark" mode="inline">
        {props.routes.map((route, i) => (
          !route.hidden &&
          <Menu.Item key={i}>
            <Link to={route.path}>
              <Icon type={route.icon} />
              <span>{route.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default Sidebar;