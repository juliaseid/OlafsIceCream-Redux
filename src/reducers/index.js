import formVisibleReducer from './form-visible-reducer';
import flavorListReducer from './flavor-list-reducer';
import detailVisibleReducer from './detail-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  detailVisibleOnPage: detailVisibleReducer,
  masterFlavorList: flavorListReducer
});

export default rootReducer;