import { combineReducers } from 'redux';

import user from './user/reducer';
import delivery from './delivery/reducer';
import deliveries from './deliveries/reducer';

export default combineReducers({
  user,
  delivery,
  deliveries,
});
