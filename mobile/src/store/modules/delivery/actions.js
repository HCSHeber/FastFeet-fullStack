export function setFocusedDelivery(delivery) {
  return {
    type: '@delivery/SET_FOCUSED_DELIVERY',
    payload: {
      delivery,
    },
  };
}
