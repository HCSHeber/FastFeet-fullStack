import React from 'react';
import PropTypes from 'prop-types';

import { ActionList } from './styles';

export default function ActionsBox({ visible, children }) {
  return <ActionList visible={visible}>{children}</ActionList>;
}

ActionsBox.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
