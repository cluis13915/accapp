import { LOGIN, ASYNC_START } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === LOGIN) {
        return { ...state, inProgress: true };
      }
      break;
    default:
      return state;
  }
};
