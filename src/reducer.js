import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import common from './reducers/common';

export default combineReducers({
  common,
  form: formReducer
});
