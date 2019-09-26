import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Context from '../../contexts';
import TreeTransfer from '../TreeTransfer';
import { registerUser, getUserByName } from  '../../api';
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col
} from 'antd';

const StyledForm = styled(Form)`
  margin: 40px 40px 0 40px;

  .formLeft {
    margin-right: 40px;
  }
`;

const { Option } = Select;

function Register(props) {
  const { state: { leagues, acts }, handleStateChange } = useContext(Context);
  const { getFieldDecorator } = props.form;
  const [targetServices, setTargetServices] = useState([]);

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const userPayload = {
          ...values,
          services: values.services.map(service => ({
            name: service,
            price: 0
          }))
        }
        
        localStorage.setItem('username', userPayload.name);
        handleStateChange({user: userPayload});
        registerUser(userPayload);
        props.history.push('/register/pricing');
      }
    });
  };

  const onChange = function(targetKeys) {
    setTargetServices(targetKeys);
  };

  const treeActs = acts.map(act => {
    const encounters = act.encounters.map(encounter => ({
      key: encounter,
      title: encounter
    }));
    return {
      key: act.name,
      title: act.name,
      children: encounters
    }   
  });

  const treeData = treeActs;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Row>
        <Col className='formLeft' span={8}>
          <Form.Item label="PoE account Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input your account name"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="League">
            {getFieldDecorator("league", {
              rules: [
                {
                  required: true,
                  message: "Please input your league"
                }
              ]
            })(
              <Select>
                {leagues.map((league, i) => (
                  <Option value={league.id} key={i}>
                    {league.id}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register service
            </Button>
          </Form.Item>
        </Col>
        <Col span={15}>
          {getFieldDecorator("services")(
            <TreeTransfer dataSource={treeData} targetKeys={targetServices} onChange={onChange} />
          )}
        </Col>
      </Row>
    </StyledForm>
  );
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Register);

export default withRouter(WrappedRegistrationForm);