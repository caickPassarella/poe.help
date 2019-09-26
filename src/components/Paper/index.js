import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

const StyledContent = styled(Content)`
  margin: 40px 40px 0 40px;
`;

function Paper({children}) {
  return (
    <StyledContent>
      <div className="wrapper">
        {children}
      </div>
    </StyledContent>
  );
}

export default Paper;