import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Button } from "antd";
import Context from '../../contexts';
import TreeTransfer from '../TreeTransfer';
import { updateServices } from '../../api';

const StyledForm = styled(Form)`
  margin: 40px 40px 0 40px;
`;

function Services(props) {
  const { state: { user, acts } } = useContext(Context);
  const { getFieldDecorator } = props.form;
  const [targetServices, setTargetServices] = useState([]);

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err && values.services) {
        const services = values.services.map(service => ({
          name: service,
          price: filterCurrentServices(user.services, service)
        }));

        const userPayload = {
          services,
        };
        console.log(userPayload);
        updateServices(user.name, userPayload);
        //props.history.push('/controller');
      }
    });
  };

  useEffect(() => {
    console.log(user);
    if (user && user.services) {
      const services = user.services.map(service => service.name);
      setTargetServices(services);
    }
  }, [user]);

  const filterCurrentServices = function(currentServices, service) {
    const services = currentServices.filter(userService => userService.name === service);
    return services.length ? services[0].price : 0;
  }

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

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "10px" }}>Services</h2>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save services
        </Button>
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("services")(
          <TreeTransfer
            dataSource={treeActs}
            targetKeys={targetServices}
            onChange={onChange}
          />
        )}
      </Form.Item>
    </StyledForm>
  );
}

const WrappedServicesForm = Form.create({ name: 'services' })(Services);

export default withRouter(WrappedServicesForm);