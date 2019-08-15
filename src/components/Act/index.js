import React, { useState } from 'react';
import { List } from 'antd';
import Paper from '../Paper';
import BasicList from '../BasicList';

function Act(props) {

  const [acts] = useState([
    {act: 'Act 1', text: 'test 1'},
    {act: 'Act 2', text: 'test 2'},
    {act: 'Act 3', text: 'test 3'},
    {act: 'Act 4', text: 'test 4'},
    {act: 'Act 5', text: 'test 5'},
    {act: 'Act 6', text: 'test 6'},
    {act: 'Act 7', text: 'test 7'},
    {act: 'Act 8', text: 'test 8'},
    {act: 'Act 9', text: 'test 9'},
    {act: 'Act 10', text: 'test 10'},
  ]);

  const [act, setAct] = useState(null);

  const selectAct = function(act) {
    console.log(act)
    setAct(act);
  }

  return (
    <Paper>
      <div style={{ padding: 24, background: "#fff", width: "100%" }}>
        <BasicList
          settings={{
            size: "large",
            header: <b>Acts</b>
          }}
          data={acts}
          renderItem={item => <List.Item onClick={() => selectAct(item.act)}>{item.act}</List.Item>}
        />
      </div>
      <div style={{ padding: 24, background: "#fff", width: "100%" }}>
        <BasicList
          settings={{
            size: "large",
            header: <b>{act ? act : 'Act'}</b>
          }}
          data={['']}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    </Paper>
  );
}

export default Act;