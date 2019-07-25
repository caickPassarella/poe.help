import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

function Act(props) {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Acts</Breadcrumb.Item>
      </Breadcrumb>
      <div className="wrapper" style={{display: 'flex', height: '100%'}}>
        <div style={{ padding: 24, background: "#fff", width: '100%' }}>
          Acts
        </div>
        <div style={{ padding: 24, background: "#fff", width: '100%' }}>
          Acts 2
        </div>
      </div>
    </Content>
  );
}

export default Act;