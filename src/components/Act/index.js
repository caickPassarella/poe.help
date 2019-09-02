import React, { useState, useContext, useEffect } from 'react';
import { List } from 'antd';
import Paper from '../Paper';
import BasicList from '../BasicList';
import './style.scss';

import Context from '../../contexts';

function Act(props) {

  const { state } = useContext(Context);
  const [act, setAct] = useState([]);

  const selectAct = function(act) {
    console.log(act);
    setAct(act);
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
          renderItem={act => <List.Item onClick={() => selectAct(act)}>{act.name}</List.Item>}
        />
      </div>
      <div className="list">
        <BasicList
          settings={{
            size: "large",
            header: <b>{act.name ? act.name : 'Act'}</b>
          }}
          data={act.bosses}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    </Paper>
  );
}

export default Act;