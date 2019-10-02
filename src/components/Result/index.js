/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import Paper from '../Paper';
import styled from 'styled-components';
import { Table, Button, Tag } from 'antd';
import { getUsersByService } from '../../api';
import Context from '../../contexts';

const TableWrapper = styled(Table)`
  width: 100%;
  background-color: #fff;
`;

function Results({match, location}) {
  
  const { state: { selectedLeague } } = useContext(Context);
  const [data, setData] = useState([]);

  const {params: {item: serviceParam}} = match;
  const defaultActions = ['Whisper'];

  const renderActions = function(items) {
    return items.map((item, i) => (
      <Button size="small" key={i}>{item}</Button>
    ));
  }

  const populateData = function(data) {
    const leagueData = data.filter(user => user.league === selectedLeague);
    const rows = leagueData.map((val, i) => ({
      key: i,
      name: val.name,
      service: val.services.filter(service => service.name === serviceParam.toLowerCase())[0].name,
      price: val.services.filter(service => service.name === serviceParam.toLowerCase())[0].price,
      league: val.league,
      actions: defaultActions
    }));

    setData(rows);
  };

  const searchUsers = async function(service) {
    const users = await getUsersByService(service.toLowerCase());
    if (users) populateData(users);
  };
  
  useEffect(() => {
    searchUsers(serviceParam);
  }, [serviceParam, selectedLeague]);

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
      title: 'League',
      dataIndex: 'league'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: renderActions
    }
  ];

  return (
    <Paper>
      <TableWrapper columns={columns} dataSource={data} />
    </Paper>
  )
}

export default Results;