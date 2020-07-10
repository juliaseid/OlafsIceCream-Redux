import formVisibleReducer from '../../reducers/detail-visible-reducer';

describe("detailVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(detailVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(detailVisibleReducer(false, { type: 'SEE_DETAIL' })).toEqual(true);
  });

});