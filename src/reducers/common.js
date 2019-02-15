import { ASYNC_START, ASYNC_END } from '../constants/actionTypes';

const defaultState = {
  currentUser: null,
  token: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ASYNC_START:
      return {...state, loading: true};
    case ASYNC_END:
      return {...state, loading: false};
  }

  return state;
};
