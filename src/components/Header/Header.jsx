import React from 'react';
import { Header1 } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return <Header1>{title}</Header1>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
