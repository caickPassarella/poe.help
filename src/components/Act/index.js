import React, { useContext } from 'react';
import { Layout, Breadcrumb } from 'antd';
import Context from '../../contexts';
const { Content } = Layout;

function Act(props) {
  const state = useContext(Context);
  console.log(state);

  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Acts</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        Acts
      </div>
    </Content>
  );
}

export default Act;