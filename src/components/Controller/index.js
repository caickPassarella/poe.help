import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Paper, Pricing, Dropdown } from '../../components'
import Context from '../../contexts';

const Wrapper = styled.div`
  display: flex
`;

const Actions = styled.div`
  width: 40%
`;

const H4 = styled.h4`
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Controller(props) {
  const { state: { leagues, user }, handleStateChange } = useContext(Context);
  const [selectedLeague, setSelectedLeague] = useState("Select your league");

  const handleClick = function({key}) {
    setSelectedLeague(leagues[key].id);
  };

  return (
    <Paper>
      <h3>{ user && user.name }</h3>
      <Wrapper>
        <Actions>
          <h2>Actions</h2>
          <H4>Change services league</H4>
          <Dropdown data={leagues} selected={selectedLeague} handleClick={handleClick} />
          <H4>Change services</H4>
          <Button>
            <Link to='/services'>Services</Link>
          </Button>
        </Actions>
        <div className="pricing">
          <Pricing />
        </div>
      </Wrapper>
    </Paper>
  );
}

export default Controller;