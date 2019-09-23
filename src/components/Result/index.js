/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Paper from '../Paper';
import './style.scss';
import { Table, Button, Tag } from 'antd';

import APIClient from '../../api';

function Results({match, location}) {
  
  const [data, setData] = useState([]);

  const {params: {item: serviceParam}} = match;
  const defaultActions = ['Whisper'];

  const renderActions = function(items) {
    return items.map((item, i) => (
      <Button size="small" key={i}>{item}</Button>
    ));
  }

  const populateData = function(data) {
    const rows = data.map((val, i) => ({
      key: i,
      name: val.name,
      service: val.services.filter(service => service.name === serviceParam.toLowerCase())[0].name,
      price: val.services.filter(service => service.name === serviceParam.toLowerCase())[0].price,
      actions: defaultActions
    }));

    setData(rows);
  };

  const searchUsers = async function(service) {
    const users = await APIClient.getUsersByService(service.toLowerCase());
    if (users) populateData(users);
  };
  
  useEffect(() => {
    searchUsers(serviceParam);
  }, [serviceParam]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Service',
      dataIndex: 'service',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: renderActions
    }
  ];

  return (
    <Paper>
      <Table className="tableWrapper" columns={columns} dataSource={data} />
    </Paper>
  )
}

export default Results;