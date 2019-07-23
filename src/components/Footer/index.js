import React from 'react';
import { Layout } from 'antd';
const { Footer: FooterAnt } = Layout;

function Footer(props) {
  return (
    <FooterAnt style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </FooterAnt>
  );
}

export default Footer;