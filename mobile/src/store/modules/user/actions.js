export function signInRequest(id, navigation) {
  return {
    type: '@user/SIGN_IN_REQUEST',
    payload: {
      id,
      navigation,
    },
  };
}

export function signInSuccess(profile) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: {
      profile,
    },
  };
}

export function signInFailure() {
  return {
    type: '@user/SIGN_IN_FAILURE',
  };
}

export function signOut(navigation) {
  return {
    type: '@user/SIGN_OUT',
    payload: {
      navigation,
    },
  };
}
