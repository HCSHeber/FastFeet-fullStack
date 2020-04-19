import produce from 'immer';

const INITIAL_STATE = {
  type: '',
  state: false,
  data: {},
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/OPEN': {
        draft.state = true;
        draft.type = action.payload.type;
        draft.data = action.payload.data;
        break;
      }
      case '@modal/CLOSE': {
        draft.state = false;
        draft.type = '';
        draft.data = {};
        break;
      }
      default:
    }
  });
}
