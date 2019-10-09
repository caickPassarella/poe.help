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
  const { state: { user, acts, maps }, handleStateChange } = useContext(Context);
  const { getFieldDecorator } = props.form;
  const [targetServices, setTargetServices] = useState([]);
  const [arrangedMaps, setArrangedMaps] = useState([]);
  const [consolidatedData, setConsolidatedData] = useState([]);

  const handleSubmit = function(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err && values.services) {
        const services = values.services.map(service => ({
          name: service.toLowerCase(),
          price: filterCurrentServices(user.services, service)
        }));

        const userPayload = {
          services,
        };
        
        updateServices(user.name, userPayload);
        handleStateChange({user: {...user, services}});
        props.history.push('/controller');
      } else if (!values.services) {
        props.history.push('/controller');
      }
    });
  };

  useEffect(() => {
    if (user && user.services) {
      const services = user.services.map(service => service.name);
      setTargetServices(services);
    }
  }, [user]);
  
  useEffect(() => {
    const setMaps = function() {
      const mapsArr = arrangeMaps(maps);
      setArrangedMaps(mapsArr);
    }
    setMaps();
  }, [maps]);

  useEffect(() => {
    const data = {acts, maps: arrangedMaps};
    setConsolidatedData(consolidateTreeData(data));
  }, [acts, arrangedMaps])
  
  const filterCurrentServices = function(currentServices, service) {
    const services = currentServices.filter(userService => userService.name === service);
    return services.length ? services[0].price : 0;
  }

  const onChange = function(targetKeys) {
    setTargetServices(targetKeys);
  };

  const arrangeMaps = function(maps) {
    return maps.reduce((prev, curr, _, arr) => {
      const tierMapNames = arr
        .filter(val => val.tier === curr.tier)
        .map(val => val.name);
      prev[curr.tier] = tierMapNames;
      return prev;
    }, {});
  };

  const consolidateTreeData = function(data) {
    const { acts, maps } = data;

    const actsData = acts.map(act => {
      const bossEncounters = act.encounters.map(encounter => ({
        key: encounter,
        title: encounter
      }));
      
      return {
        key: act.name,
        title: act.name,
        children: bossEncounters
      }
    });

    const mapsData = Object.entries(maps).map(([tier, names]) => {
      const mapNames = names.map(name => ({
        key: name,
        title: name
      }));

      return {
        key: `Tier ${tier}`,
        title: `Tier ${tier}`,
        children: mapNames 
      }
    });

    const services = [
      {name: 'Acts', data: actsData},
      {name: 'Maps', data: mapsData}
    ];

    return services.map(service => ({
      key: service.name,
      title: service.name,
      children: service.data
    }));

  }

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
            dataSource={consolidatedData}
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