export function setDeliveriesRequest(id) {
  return {
    type: '@deliveries/SET_DELIVERIES_REQUEST',
    payload: {
      id,
    },
  };
}

export function setDeliveries(deliveries) {
  return {
    type: '@deliveries/SET_DELIVERIES',
    payload: {
      deliveries,
    },
  };
}
