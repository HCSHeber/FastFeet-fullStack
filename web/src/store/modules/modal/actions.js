export function closeModal() {
  return {
    type: '@modal/CLOSE',
  };
}

export function openModal(type, data) {
  return {
    type: '@modal/OPEN',
    payload: {
      type,
      data,
    },
  };
}
