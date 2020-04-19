import { all } from 'redux-saga/effects';

import user from './user/sagas';
import deliveries from './deliveries/sagas';

export default function* rootSaga() {
  return yield all([user, deliveries]);
}
