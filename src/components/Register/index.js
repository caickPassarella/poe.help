import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Context from '../../contexts';
import { registerUser } from  '../../api';
import {
  Form,
  Input,
  Select,
  Button
} from 'antd';

const StyledForm = styled(Form)`
  margin: 40px auto 0 auto;
  width: 50%;
`;

const { Option } = Select;

function Register(props) {
  const { state: { leagues }, handleStateChange } = useContext(Context);
  const { getFieldDecorator } = props.form;

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const userPayload = {
          ...values,
          services: []
        }

        localStorage.setItem('username', userPayload.name);
        handleStateChange({user: userPayload});
        registerUser(userPayload);
        props.history.push('/controller');
      } else {
        console.error(err);
      }
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
          Register
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Register);

export default withRouter(WrappedRegistrationForm);