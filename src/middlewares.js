import { ASYNC_START, ASYNC_END } from './constants/actionTypes';

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const promiseMiddleware = store => next => action => {
  if (!isPromise(action.payload)) {
    return next(action);
  }

  store.dispatch({ type: ASYNC_START, subtype: action.type });

  action.payload.then(
    res => {
      action.payload = res;

      store.dispatch({ type: ASYNC_END, success: true, promise: action.payload });
      store.dispatch(action);
    },
    error => {
      action.error = true;
      action.payload = error.response.body;

      store.dispatch({ type: ASYNC_END, success: false, promise: action.payload });
      store.dispatch(action);
    }
  );
};

export { promiseMiddleware };
