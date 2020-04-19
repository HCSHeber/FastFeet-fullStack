import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';
import { setDeliveriesRequest } from '../deliveries/actions';

export function* signIn({ payload }) {
  const { id, navigation } = payload;

  try {
    const response = yield call(api.post, 'deliveryman/session', {
      id,
    });

    yield put(signInSuccess(response.data));

    yield put(setDeliveriesRequest(id));

    navigation.navigate('Home');
  } catch (err) {
    yield put(signInFailure());
    Alert.alert('Erro', 'Erro na autenticação. Verifique seus dados');
  }
}

export function signOut({ payload }) {
  payload.navigation.navigate('SignIn');
}

export default all([
  takeLatest('@user/SIGN_IN_REQUEST', signIn),
  takeLatest('@user/SIGN_OUT', signOut),
]);
