import formVisibleReducer from './form-visible-reducer';
import flavorListReducer from './flavor-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterFlavorList: flavorListReducer
});

export default rootReducer;