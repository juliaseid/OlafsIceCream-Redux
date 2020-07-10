export default (state = {}, action) => {
  const { name, allergens, creamery, id } = action;

  switch (action.type) {
    case 'ADD_FLAVOR':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          allergens: allergens,
          creamery: creamery,
          id: id
        }
      });

    case 'DELETE_FLAVOR':
      const newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;

  };
};