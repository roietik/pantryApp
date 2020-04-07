import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectWrapper = styled.select`
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: #e6e6e6;
  border: none;
  border-radius: 50px;
  outline: none;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: gray;
  }
`;

const predefinedOptions = ['kg', 'g', 'l', 'szt'];

const Select = ({ options = predefinedOptions }) => {
  return (
    <SelectWrapper>
      {options.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </SelectWrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
