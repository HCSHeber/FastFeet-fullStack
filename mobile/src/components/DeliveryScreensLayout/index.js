import React from 'react';
import PropTypes from 'prop-types';

import { AfterHeader, Container, Content } from './styles';

export default function DeliveryScreensLayout({ children }) {
  return (
    <>
      <AfterHeader />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
}

DeliveryScreensLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
