import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import Param from 'components/atoms/List/Param';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThList } from '@fortawesome/free-solid-svg-icons';

const MenuWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: #ffd82b;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  align-self: center;
`;

const Menu = styled.div`
  align-self: center;
`;

const Item = styled(Param)`
  padding: 10px 20px;
  color: black;
  &:first-child {
    padding-left: 0;
  }
`;

const Add = styled(Button)`
  justify-self: right;
  align-self: center;
  width: 50px;
  height: 50px;
  line-height: 57px;
  font-weight: 300;
  border-radius: 50%;
`;

const Nav = () => {
  return (
    <MenuWrapper>
      <HeaderTitle>
        <Icon icon={faThList} size="1x" /> PantryApp
      </HeaderTitle>
      <Menu>
        <Item as={Link} to="/pantry">
          Pantry
        </Item>
        <Item as={Link} to="/shopping-list">
          Shopping List
        </Item>
        <Item as={Link} to="/settings">
          Settings
        </Item>
      </Menu>
      <Add as={Link} to="/add">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Add>
    </MenuWrapper>
  );
};

export default Nav;
