import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { InputNumber, Row, Col, Form, Button } from 'antd';
import styled from 'styled-components';
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
        updateUser(user.name, userPayload);
        props.history.push('/controller');
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {user && (
        <PriceWrapper>
          <h2>Pricing</h2>
          <h3>Set the price for your services</h3>
          <Row gutter={32}>
            {user.services.map((service, index) => (
              <Col key={index} sm={8} lg={4}>
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
  );
}

const WrappedPricingForm = Form.create({ name: 'pricing' })(Pricing);

export default withRouter(WrappedPricingForm);