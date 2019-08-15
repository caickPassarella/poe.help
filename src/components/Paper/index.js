import React from 'react';
import './style.scss';
import { Layout } from 'antd';

function Paper({children}) {
  const { Content } = Layout;
  return (
    <Content className="content">
      <div className="wrapper">
        {children}
      </div>
    </Content>
  );
}

export default Paper;