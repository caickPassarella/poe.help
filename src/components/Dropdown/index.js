import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown as DropdownAntd, Icon } from 'antd';
import styled from 'styled-components';

const StyledDropdown = styled(DropdownAntd)`
  display: inline-block;
  min-width: 200px;
  cursor: pointer;
`;

function Dropdown({data, selected, handleClick}) {

  const menu = (
    <Menu onClick={handleClick}>
      {data.map((item, i) => (
        <Menu.Item key={i}>
          {item.id}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <StyledDropdown overlay={menu} trigger={["click"]}>
      <div>
        {selected} <Icon type="down" />
      </div>
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.any,
  handleClick: PropTypes.func
}

export default Dropdown;