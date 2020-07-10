import flavorListReducer from '../../reducers/flavor-list-reducer';

describe('flavorListReducer', () => {

  let action;
  const flavorData = {
    name: 'hazelnut salted caramel',
    allergens: 'tree nuts, dairy',
    creamery: 'Tillamook',
    id: 1,
    scoops: 100
  };

  const currentState = {
    1: {
      name: 'limoncello sorbet',
      allergens: 'none',
      creamery: 'Gelatiamo',
      id: 1,
      scoops: 100
    },
    2: {
      name: 'rice pudding',
      allergens: 'eggs, dairy',
      creamery: 'Olympic',
      id: 2,
      scoops: 100
    }
  }


  test('Should successfully add new flavor data to masterFlavorList', () => {
    const { name, allergens, creamery, id, scoops } = flavorData;
    action = {
      type: 'ADD_FLAVOR',
      name: name,
      allergens: allergens,
      creamery: creamery,
      id: id,
      scoops: scoops
    };

    expect(flavorListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        allergens: allergens,
        creamery: creamery,
        id: id,
        scoops: 100
      }
    });
  });

  test('Should successfully delete a flavor', () => {
    action = {
      type: 'DELETE_FLAVOR',
      id: 1
    };
    expect(flavorListReducer(currentState, action)).toEqual({
      2: {
        name: 'rice pudding',
        allergens: 'eggs, dairy',
        creamery: 'Olympic',
        id: 2,
        scoops: 100
      }
    });
  });


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(flavorListReducer({}, { type: null })).toEqual({});
  });

});