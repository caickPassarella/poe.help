import React, { useState, useContext } from 'react';
import Context from '../../contexts';
import TreeTransfer from '../TreeTransfer';
import './style.scss';
import APIClient from  '../../api';
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col
} from 'antd';

const { Option } = Select;

function Register(props) {
  const { state: { leagues, acts } } = useContext(Context);
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
        
        APIClient.registerUser(userPayload);
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
    <Form className='registerForm' onSubmit={handleSubmit}>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
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
    </Form>
  );
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Register);

export default WrappedRegistrationForm;