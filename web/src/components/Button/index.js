import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

export default function Button({ type, children, ...rest }) {
  return (
    <Btn type={type} {...rest}>
      {children}
    </Btn>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  type: 'button',
};
