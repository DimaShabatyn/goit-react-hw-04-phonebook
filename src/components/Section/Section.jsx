import React from 'react';
import { SectionBox } from './Section.styled';
import { Header } from 'components/Header/Header';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Header title={title} />
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
