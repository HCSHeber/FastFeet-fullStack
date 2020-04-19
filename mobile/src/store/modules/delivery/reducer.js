import produce from 'immer';

const INITIAL_STATE = {
  delivery: {},
  state: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/SET_FOCUSED_DELIVERY': {
        draft.delivery = action.payload.delivery;
        break;
      }

      default:
    }
  });
}
