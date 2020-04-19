import produce from 'immer';

const INITIAL_STATE = {
  deliveries: [],
};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveries/SET_DELIVERIES': {
        draft.deliveries = action.payload.deliveries;
        break;
      }

      default:
    }
  });
}
