import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { InputNumber, Form, Button } from 'antd';
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

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ServiceItem = styled.div`
  margin-right: 12px
`;

function Pricing(props) {

  const { state: { user }, handleStateChange } = useContext(Context);
  const { getFieldDecorator } = props.form;

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const services = Object.entries(values).map(([name, price]) => ({
          name,
          price
        }));

        const userPayload = {...user, services};
        updateUser(user.name, userPayload);
        handleStateChange({user: userPayload});
      }
    });
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      {user && (
        <PriceWrapper>
          <h2>Pricing</h2>
          <h3>Set the price for your services</h3>
          <FlexDiv>
            {user.services.map((service, index) => (
              <ServiceItem key={index}>
                <label title="">{service.name}</label>
                <Form.Item>
                  {getFieldDecorator(service.name, { initialValue: service.price })(
                    <InputNumber min={0} />
                  )}
                </Form.Item>
              </ServiceItem>
            ))}
          </FlexDiv>
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