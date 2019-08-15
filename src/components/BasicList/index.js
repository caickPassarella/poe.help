import React from 'react';
import './style.scss';
import { List } from 'antd';

function BasicList({data, renderItem, settings}) {
  return (
    <List
      {...settings}
      dataSource={data}
      renderItem={renderItem}
      className="list"
    />
  );
}

export default BasicList;