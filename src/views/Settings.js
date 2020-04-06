import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  margin-top: 108px;
  margin-left: 18px;
  align-self: center;
`;

const Settings = () => {
  return (
    <HeaderTitle>
      <Icon icon={faCogs} size="1x" /> Settings
    </HeaderTitle>
  );
};

export default Settings;
