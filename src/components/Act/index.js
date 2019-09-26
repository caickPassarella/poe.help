import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import Paper from '../Paper';
import BasicList from '../BasicList';
import Context from '../../contexts';
import { withRouter } from 'react-router-dom';

const StyledList = styled.div`
  padding: 24px;
  background: #fff;
  width: 100%
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #fff;
`;

function Act({history}) {

  const { state } = useContext(Context);
  const [act, setAct] = useState([]);
  const [searchItem, setSearchItem] = useState(null);

  const selectAct = function(actItem) {
    setAct(actItem);
  }

  const selectSearchItem = function(item) {
    setSearchItem(item);
    history.push(`result/${item}`);
  }

  const renderActsList = function(actItem) {
    return (
      <List.Item onClick={() => selectAct(actItem)}>{actItem.name}</List.Item>
    );
  }
  
  const renderSelectedItems = function(item) {
    return (
      <>
        <List.Item onClick={() => selectSearchItem(item)}>{item}</List.Item>
      </>
    );
  }
  
  return (
    <Paper>
      <Wrapper>
        <StyledList>
          <BasicList
            settings={{
              size: "large",
              header: <b>Acts</b>
            }}
            data={state.acts}
            renderItem={actItem => renderActsList(actItem)}
          />
        </StyledList>
        <StyledList>
          <BasicList
            settings={{
              size: "large",
              header: <b>{act.name ? act.name : "Act"}</b>
            }}
            data={act.encounters}
            renderItem={item => renderSelectedItems(item)}
          />
        </StyledList>
      </Wrapper>
    </Paper>
  );
}

export default withRouter(Act);