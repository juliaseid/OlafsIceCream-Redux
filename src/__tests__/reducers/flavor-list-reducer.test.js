import flavorListReducer from '../../reducers/flavor-list-reducer';

describe('flavorListReducer', () => {

  let action;
  const flavorData = {
    name: 'hazelnut salted caramel',
    allergens: 'tree nuts, dairy',
    creamery: 'Tillamook',
    id: 1
  };

  test('Should successfully add new flavor data to masterFlavorList', () => {
    const { name, allergens, creamery, id } = flavorData;
    action = {
      type: 'ADD_FLAVOR',
      name: name,
      allergens: allergens,
      creamery: creamery,
      id: id
    };

    expect(flavorListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        allergens: allergens,
        creamery: creamery,
        id: id
      }
    });
  });


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(flavorListReducer({}, { type: null })).toEqual({});
  });

});