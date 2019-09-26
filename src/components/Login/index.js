import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Context from '../../contexts';
import { getUserByName } from  '../../api';
import { Form, Input, Button } from "antd";

const LoginWrapper = styled.div`
  max-width: 450px;
  margin: 40px auto;
  width: 100%;
`;

function Login(props) {
  const { handleStateChange } = useContext(Context);
  const { getFieldDecorator, setFields } = props.form;

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const user = await getUserByName(values.name);

        if (user) {
          localStorage.setItem("username", user.name);
          handleStateChange({user});
          return props.history.push("/");
        }

        setFields({
          name: {
            value: values.name,
            errors: [new Error('User not registered')]
          }
        });

      } else {
        console.error(err);
      }
    });
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
}

const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default withRouter(WrappedLoginForm);