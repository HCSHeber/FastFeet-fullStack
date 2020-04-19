import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import ListOrders from '~/pages/Orders/List';
import ListDeliverymen from '~/pages/Deliverymen/List';
import ListRecipients from '~/pages/Recipients/List';
import Problems from '~/pages/Problems';
import CreateOrders from '~/pages/Orders/Create';
import CreateDeliverymen from '~/pages/Deliverymen/Create';
import CreateRecipients from '~/pages/Recipients/Create';
import UpdateOrders from '~/pages/Orders/Update';
import UpdateDeliverymen from '~/pages/Deliverymen/Update';
import UpdateRecipients from '~/pages/Recipients/Update';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" exact component={ListOrders} isPrivate />
      <Route path="/deliverymen" exact component={ListDeliverymen} isPrivate />
      <Route path="/recipients" exact component={ListRecipients} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />

      <Route path="/orders/create" component={CreateOrders} isPrivate form />
      <Route
        path="/deliverymen/create"
        component={CreateDeliverymen}
        isPrivate
        form
      />
      <Route
        path="/recipients/create"
        component={CreateRecipients}
        isPrivate
        form
      />

      <Route
        path="/orders/:id/update"
        component={UpdateOrders}
        isPrivate
        form
      />
      <Route
        path="/deliverymen/:id/update"
        component={UpdateDeliverymen}
        isPrivate
        form
      />
      <Route
        path="/recipients/:id/update"
        component={UpdateRecipients}
        isPrivate
        form
      />
    </Switch>
  );
}
