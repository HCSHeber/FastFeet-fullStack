import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { setDeliveries } from './actions';

export function* getDeliveries({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `deliveryman/${id}/deliveries`, {
      id,
    });

    yield put(setDeliveries(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([
  takeLatest('@deliveries/SET_DELIVERIES_REQUEST', getDeliveries),
]);
