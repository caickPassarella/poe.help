import React, { useContext } from 'react';
import { InputNumber, Row, Col, Form, Button } from 'antd';
import styled from 'styled-components';
import Paper from '../Paper'
import Context from '../../contexts';
import { updateUser } from '../../api';

const PriceWrapper = styled.div`
  width: 100%;
  
  h3 {
    margin-bottom: 40px;
  }
  
  label {
    display: block;
  }

  input {
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #fff;
`;

function Pricing(props) {

  const { state: { user } } = useContext(Context);
  const { getFieldDecorator } = props.form;

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const services = Object.entries(values).map(([name, price]) => ({
          name,
          price
        }));

        const userPayload = {
          services,
        };
        console.log(userPayload);
        updateUser(user.name, userPayload);
      }
    });
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        {user && (
          <PriceWrapper>
            <h2>Pricing</h2>
            <h3>Set the price for your services</h3>
            <Row gutter={32}>
              {user.services.map((service, index) => (
                <Col key={index} span={4}>
                  <label title="">{service.name}</label>
                  <Form.Item>
                    {getFieldDecorator(service.name, { initialValue: 0 })(
                      <InputNumber min={0} />
                    )}
                  </Form.Item>
                </Col>
              ))}
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save pricing
              </Button>
            </Form.Item>
          </PriceWrapper>
        )}
      </Form>
    </Paper>
  );
}

const WrappedPricingForm = Form.create({ name: 'pricing' })(Pricing);

export default WrappedPricingForm;