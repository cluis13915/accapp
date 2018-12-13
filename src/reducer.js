import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import common from './reducers/common';
import auth from './reducers/auth';

export default combineReducers({
  common,
  auth,
  form: formReducer
});
