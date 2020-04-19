import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';
import FormLayout from '../pages/_layouts/form';
import ListLayout from '../pages/_layouts/list';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  form,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/orders" />;
  }

  return (
    <Route
      {...rest}
      render={props => {
        return signed ? (
          <DefaultLayout>
            {form ? (
              <FormLayout>
                <Component {...props} />
              </FormLayout>
            ) : (
              <ListLayout>
                <Component {...props} />
              </ListLayout>
            )}
          </DefaultLayout>
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  form: false,
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
  form: PropTypes.bool,
};
