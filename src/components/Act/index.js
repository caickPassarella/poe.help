import React, { useState, useContext } from 'react';
import { List } from 'antd';
import Paper from '../Paper';
import BasicList from '../BasicList';
import { withRouter } from 'react-router-dom';
import './style.scss';

import Context from '../../contexts';

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
      <div className="list">
        <BasicList
          settings={{
            size: "large",
            header: <b>Acts</b>
          }}
          data={state.acts}
          renderItem={actItem => renderActsList(actItem)}
        />
      </div>
      <div className="list">
        <BasicList
          settings={{
            size: "large",
            header: <b>{act.name ? act.name : 'Act'}</b>
          }}
          data={act.encounters}
          renderItem={item => renderSelectedItems(item)}
        />
      </div>
    </Paper>
  );
}

export default withRouter(Act);