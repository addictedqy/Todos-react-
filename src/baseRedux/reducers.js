import { combineReducers } from 'redux';
import { inputingReducer } from '../views/Input/InputRedux.js';
import { listReducer } from '../views/List/ListRedux.js';
import { typeReducer } from '../views/Bottom/ButtomRedux.js';

export default combineReducers({
  list: listReducer,
  type: typeReducer,
  inputing: inputingReducer,
})
