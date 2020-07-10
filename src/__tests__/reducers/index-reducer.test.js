import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import flavorListReducer from '../../reducers/flavor-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Check that initial state of flavorListReducer matches root reducer', () => {
    expect(store.getState().masterFlavorList).toEqual(flavorListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterFlavorList: {},
      formVisibleOnPage: false
    });
  });

});