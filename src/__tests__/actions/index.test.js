import * as actions from './../../actions';

describe('ice cream palace actions', () => {
  it('deleteFlavor should create DELETE_FLAVOR action', () => {
    expect(actions.deleteFlavor(1)).toEqual({
      type: 'DELETE_FLAVOR',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addFlavor should create ADD_FLAVOR action', () => {
    expect(actions.addFlavor({ name: 'wild huckleberry', allergens: 'dairy', creamery: 'Snoqualmie', scoops: 100, id: 1 })).toEqual({
      type: 'ADD_FLAVOR',
      name: 'wild huckleberry',
      allergens: 'dairy',
      creamery: 'Snoqualmie',
      scoops: 100,
      id: 1
    });
  });

});