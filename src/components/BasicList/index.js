import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

const StyledList = styled(List)`
  & li {
    padding: 16px;
    transition-duration: .1s;
    &:hover {
      background-color: #fbfbfb;
    }
  }
`;

function BasicList({data, renderItem, settings}) {
  return (
    <StyledList
      {...settings}
      dataSource={data}
      renderItem={renderItem}
    />
  );
}

export default BasicList;